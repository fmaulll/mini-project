import React from "react";

const CardTodo = ({ children, index }) => {
  const getColor = (idx) => {
    if ((idx + 1) % 4 === 0) {
      return "border-success bg-[#F8FBF9]";
    }
    if ((idx + 1) % 3 === 0) {
      return "border-danger bg-[#FFFAFA]";
    }
    if ((idx + 1) % 2 === 0) {
      return "border-caution bg-[#FFFCF5]";
    }
    return "border-primary bg-[#F7FEFF]";
  };
  return (
    <div className={`rounded border h-min p-4 ${getColor(index)}`}>{children}</div>
  );
};

export default CardTodo;
