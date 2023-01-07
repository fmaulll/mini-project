import React, { Fragment, useEffect, useState } from "react";
import Button from "../atoms/Button";
import CardTodo from "../atoms/CardTodo";
import TodoHeader from "../molecules/TodoHeader";
import TodoItem from "../molecules/TodoItem";
import { BiPlusCircle } from "react-icons/bi";
import axios from "axios";

const TodoGroup = ({ token, data, index, handleActionMenu, onClickAdd }) => {
  const [loading, setLoading] = useState(false);
  const [dataTask, setDataTask] = useState({});

  const getDataTask = async() => {
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos/${data.id}/items`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      });
      if (result.status === 200) {
        setDataTask(result.data);
        setLoading(false);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {}
  }

  useEffect(() => {
    setLoading(true)
    getDataTask();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <CardTodo index={index}>Loading...</CardTodo>
      ) : (
        <CardTodo index={index}>
          <TodoHeader data={data} index={index} />
          {dataTask.length > 0 ? (
            <div className="my-4">
              {dataTask.map((item, index) => (
                <TodoItem
                  addStyle={`${dataTask?.length === index + 1 ? "" : "mb-3"}`}
                  index={index}
                  key={index}
                  item={item}
                  handleActionMenu={handleActionMenu}
                />
              ))}
            </div>
          ) : (
            <div
              className={`my-4 relative p-4 border border-[#E0E0E0] rounded text-gray-500`}
            >
              No Task
            </div>
          )}
          <Button onClick={onClickAdd} icon={<BiPlusCircle size={24} />}>
            New Task
          </Button>
        </CardTodo>
      )}
    </Fragment>
  );
};

export default TodoGroup;
