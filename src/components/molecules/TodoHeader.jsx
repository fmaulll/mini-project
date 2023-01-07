import React from "react";

const TodoHeader = ({ title, date, index }) => {
  const getColor = (idx) => {
    if (idx + (1 % 4) === 0) {
      return "border-success text-success";
    }
    if (idx + (1 % 3) === 0) {
      return "border-danger text-danger";
    }
    if (idx + (1 % 2) === 0) {
      return "border-caution text-caution";
    }
    return "border-primary text-primary";
  };
  return (
    <div className="flex flex-col items-start">
      <h1 className={`py-0.5 px-2 rounded border text-xs mb-2.5 ${getColor(index)}`}>{title}</h1>
      <h1 className="text-dark text-xs font-bold">{date}</h1>
    </div>
  );
};

export default TodoHeader;
