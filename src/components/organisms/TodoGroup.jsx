import React from "react";
import CardTodo from "../atoms/CardTodo";
import TodoHeader from "../molecules/TodoHeader";
import TodoItem from "../molecules/TodoItem";

const TodoGroup = ({ data, index }) => {
  return (
    <CardTodo>
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
    </CardTodo>
  );
};

export default TodoGroup;
