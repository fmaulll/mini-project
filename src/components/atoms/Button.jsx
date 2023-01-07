import React from "react";

const Button = ({ children, buttonType = "add", icon }) => {
  const getStyle = (type) => {
    if (type === "primary") {
      return "bg-primary text-white hover:bg-primaryBright active:bg-primaryDark";
    }
    if (type === "white") {
      return "bg-white text-dark border border-[#E0E0E0] hover:bg-gray-300 active:bg-gray-700";
    }
    if (type === "red") {
      return "bg-red text-white border border-red hover:bg-redBright active:bg-redDark";
    }
    return "bg-primary text-white hover:bg-primaryBright active:bg-primaryDark";
  };
  return (
    <button
      className={buttonType === "add" ? "font-normal text-sm flex items-center" : `shadow-lg px-4 h-7 text-xs font-bold rounded-lg flex items-center duration-200 ${getStyle(buttonType)}`}
    >
      {icon ? <div className="mr-1">{icon}</div> : null}
      {children}
    </button>
  );
};

export default Button;
