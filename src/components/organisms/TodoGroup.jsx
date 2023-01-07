import React from "react";
import Button from "../atoms/Button";
import CardTodo from "../atoms/CardTodo";
import TodoHeader from "../molecules/TodoHeader";
import TodoItem from "../molecules/TodoItem";
import { BiPlusCircle } from "react-icons/bi";

const TodoGroup = ({ data, index }) => {
  return (
    <CardTodo index={index}>
      <TodoHeader date={data.date} title={data.title} index={index} />
      <div className="my-4">
        {data.tasks.map((item, index) => (
          <TodoItem
            addStyle={`${data.task?.length === index + 1 ? "" : "mb-3"}`}
            index={index}
            key={index}
            title={item.title}
            progress={item.progress}
          />
        ))}
      </div>
      <Button icon={<BiPlusCircle size={24} />}>New Task</Button>
    </CardTodo>
  );
};

export default TodoGroup;
