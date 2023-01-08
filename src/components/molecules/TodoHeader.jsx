import React from "react";
import Label from "../atoms/Label";

const TodoHeader = ({ data, index }) => {
  return (
    <div className="flex flex-col items-start">
      <Label index={index}>{data.title}</Label>
      <h1 className="text-dark text-xs font-bold">{data.description}</h1>
    </div>
  );
};

export default TodoHeader;
