import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ModalAddEdit from "../components/organisms/ModalAddEdit";
import ModalDelete from "../components/organisms/ModalDelete";
import TodoGroup from "../components/organisms/TodoGroup";

const dummy = [
  {
    title: "Task Group 10",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 37 },
      { title: "Ngepel rumah pak joe koe wee", progress: 20 },
      { title: "Ngepel rumah pak joe koe wee", progress: 98 },
      { title: "Ngepel rumah pak joe koe wee", progress: 24 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 70 },
      { title: "Ngepel rumah pak joe koe wee", progress: 100 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 30 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
];

const TodoPage = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [idTask, setIdTask] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMoveRight = async () => {};
  const handleMoveLeft = async () => {};

  const handleClickAdd = () => {
    setOpenAdd(true);
  };

  const handleActionMenu = (type, id) => {
    if (type === "right") {
      handleMoveRight();
    }
    if (type === "left") {
      handleMoveLeft();
    }
    if (type === "edit") {
      setOpenEdit(true);
    }
    if (type === "delete") {
      setOpenDelete(true);
    }
  };

  const handleChange = (key, value) => {
    setData((prev) => {
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
    } catch (error) {}
  }

  useEffect(() => {
    setLoading(true);
    async function login() {
      try {
        const result = await axios({
          url: "https://todo-api-18-140-52-65.rakamin.com/auth/login",
          method: "POST",
          // data: { email: "fmaulll@gmail.com", password: "secretKey" },
          data: { email: "tony@stark.com", password: "password" },
        });
        if (result.status === 200) {
          setToken(result.data.auth_token);
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
        <div>Loading...</div>
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
                  />
                ))}
              </div>
            ) : (
              <div>No Content</div>
            )}
          </div>
          {openDelete && <ModalDelete onClose={() => setOpenDelete(false)} />}
          {/* {openEdit && (
        <ModalAddEdit
          data={data}
          type="edit"
          onClose={() => setOpenEdit(false)}
          handleChange={handleChange}
        />
      )}
      {openAdd && (
        <ModalAddEdit
          data={data}
          type="add"
          onClose={() => setOpenAdd(false)}
          handleChange={handleChange}
        />
      )} */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TodoPage;
