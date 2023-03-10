import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ModalAddEdit from "../components/organisms/ModalAddEdit";
import ModalDelete from "../components/organisms/ModalDelete";
import TodoGroup from "../components/organisms/TodoGroup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const auth = {
  email: import.meta.env.VITE_EMAIL,
  password: import.meta.env.VITE_PASSWORD,
};

const initDataTask = {
  name: "",
  progress_percentage: "",
};

const TodoPage = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [dataTask, setDataTask] = useState({
    name: "",
    progress_percentage: "",
  });

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos/${selectedTodo}/items/${selectedId}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      });
      if (result.status === 204) {
        getData(token);
        setOpenDelete(false);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSave = async (type) => {
    if(dataTask.name === "" || dataTask.progress_percentage === ""){
      alert("Input can't be empty!")
      return
    }
    setLoading(true);
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos/${selectedTodo}/items/${
          type === "edit" ? selectedId : ""
        }`,
        method: type === "edit" ? "PATCH" : "POST",
        data:
          type === "edit"
            ? { ...dataTask, target_todo_id: selectedTodo }
            : dataTask,
        headers: { authorization: `Bearer ${token}` },
      });
      if ((result.status === type) === "edit" ? 200 : 201) {
        getData(token);
        setOpenAdd(false);
        setOpenEdit(false);
        setDataTask(initDataTask);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleMoveDrag = async (item, targetId) => {
    if (item.todo_id === targetId) {
      return;
    }
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos/${item.todo_id}/items/${item.id}`,
        method: "PATCH",
        data: { target_todo_id: targetId },
        headers: { authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        getData(token);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleMove = async (item) => {
    setLoading(true);
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos/${item.todo_id}/items/${item.id}`,
        method: "PATCH",
        data: { target_todo_id: item.target_todo_id },
        headers: { authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        getData(token);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleClickAdd = (id) => {
    setSelectedTodo(id);
    setDataTask(initDataTask)
    setOpenAdd(true);
  };

  const handleActionMenu = (type, item) => {
    if (type === "right" || type === "left") {
      handleMove(item);
    }
    if (type === "edit") {
      setDataTask({
        name: item.name,
        progress_percentage: item.progress_percentage,
      });
      setOpenEdit(true);
    }
    if (type === "delete") {
      setOpenDelete(true);
    }
    setSelectedId(item.id);
    setSelectedTodo(item.todo_id);
  };

  const handleChange = (key, value) => {
    if(key === "progress_percentage"){
      if(value > 100){
        setDataTask((prev) => {
          return {
            ...prev,
            progress_percentage: 100,
          };
        });
        return
      }
    }
    setDataTask((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  async function getData(authToken) {
    try {
      const result = await axios({
        url: "https://todo-api-18-140-52-65.rakamin.com/todos",
        method: "GET",
        headers: { authorization: `Bearer ${authToken}` },
      });
      if (result.status === 200) {
        setData(result.data);
        setLoading(false);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    async function login() {
      try {
        const result = await axios({
          url: "https://todo-api-18-140-52-65.rakamin.com/auth/login",
          method: "POST",
          data: auth,
        });
        if (result.status === 200) {
          setToken(result.data.auth_token);
          localStorage.setItem("token", result.data.auth_token);
          getData(result.data.auth_token);
        } else {
          alert("Something went wrong!");
        }
      } catch (error) {
        alert(error);
      }
    }
    login();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="flex justify-center items-center text-2xl font-bold text-dark h-1/2">
          <AiOutlineLoading3Quarters size={32} className="animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        <Fragment>
          <div className="p-6">
            {data.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                {data?.map((item, index) => (
                  <TodoGroup
                    token={token}
                    data={item}
                    index={index}
                    key={index}
                    onClickAdd={handleClickAdd}
                    handleActionMenu={handleActionMenu}
                    todos={data}
                    handleMoveDrag={handleMoveDrag}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center text-2xl font-bold text-dark h-1/2">
                No Content
              </div>
            )}
          </div>
          {openDelete && (
            <ModalDelete
              handleDelete={handleDelete}
              onClose={() => setOpenDelete(false)}
            />
          )}
          {openEdit && (
            <ModalAddEdit
              handleSave={handleSave}
              data={dataTask}
              type="edit"
              onClose={() => setOpenEdit(false)}
              handleChange={handleChange}
            />
          )}
          {openAdd && (
            <ModalAddEdit
              handleSave={handleSave}
              data={dataTask}
              type="add"
              onClose={() => setOpenAdd(false)}
              handleChange={handleChange}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TodoPage;
