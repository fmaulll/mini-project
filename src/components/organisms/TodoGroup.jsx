import React, { Fragment, useEffect, useState } from "react";
import Button from "../atoms/Button";
import CardTodo from "../atoms/CardTodo";
import TodoHeader from "../molecules/TodoHeader";
import TodoItem from "../molecules/TodoItem";
import { BiPlusCircle } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useDrop } from "react-dnd";

const TodoGroup = ({
  handleMoveDrag,
  todos,
  token,
  data,
  index,
  handleActionMenu,
  onClickAdd,
}) => {
  const [loading, setLoading] = useState(false);
  const [dataTask, setDataTask] = useState({});
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => handleMoveDrag(item, data.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    setLoading(true);

    const getDataTask = async () => {
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
      } catch (error) {
        alert(error);
      }
    };

    getDataTask();
  }, [data]);

  return (
    <Fragment>
      {loading ? (
        <CardTodo index={index}>
          <div className="flex justify-center items-center font-bold text-dark">
            <AiOutlineLoading3Quarters className="animate-spin mr-2" /> Getting
            Tasks...
          </div>
        </CardTodo>
      ) : (
        <div ref={drop}>
          <CardTodo styling={`${isOver ? "bg-gray-100" : ""}`} index={index}>
            <TodoHeader data={data} index={index} />
            {dataTask.length > 0 ? (
              <div className="mt-2 mb-4">
                {dataTask.map((item, index) => (
                  <TodoItem
                    addStyle={`${dataTask?.length === index + 1 ? "" : "mb-3"}`}
                    index={index}
                    key={index}
                    item={item}
                    handleActionMenu={handleActionMenu}
                    todos={todos}
                  />
                ))}
              </div>
            ) : (
              <div
                className={`mt-2 mb-4 relative px-4 py-2 border border-[#E0E0E0] rounded text-gray-500`}
              >
                No Task
              </div>
            )}
            <Button
              onClick={() => onClickAdd(data.id)}
              icon={<BiPlusCircle size={24} />}
            >
              New Task
            </Button>
          </CardTodo>
        </div>
      )}
    </Fragment>
  );
};

export default TodoGroup;
