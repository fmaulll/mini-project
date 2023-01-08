import React from "react";

const Label = ({children, index}) => {
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
    <h1
      className={`py-0.5 px-2 rounded border text-xs mb-2.5 ${getColor(index)}`}
    >
      {children}
    </h1>
  );
};

export default Label;
