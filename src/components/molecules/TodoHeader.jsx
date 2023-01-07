import React from "react";

const TodoHeader = ({ data, index }) => {
  const getColor = (idx) => {
    if ((idx + 1) % 4 === 0) {
      return "border-success text-green";
    }
    if ((idx + 1) % 3 === 0) {
      return "border-danger text-red";
    }
    if ((idx + 1) % 2 === 0) {
      return "border-caution text-orange";
    }
    return "border-primary text-primary";
  };
  return (
    <div className="flex flex-col items-start">
      <h1
        className={`py-0.5 px-2 rounded border text-xs mb-2.5 ${getColor(
          index
        )}`}
      >
        {data.title}
      </h1>
      <h1 className="text-dark text-xs font-bold">{data.description}</h1>
    </div>
  );
};

export default TodoHeader;
