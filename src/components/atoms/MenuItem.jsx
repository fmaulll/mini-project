import React from "react";

const MenuItem = ({ disabled, icon, children, onClick, type = "normal" }) => {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className={`w-full flex items-center px-[22px] py-2 duration-200 text-sm ${
        disabled ? "text-gray-300 cursor-not-allowed" : "text-dark cursor-pointer"
      } font-semibold ${
        type === "delete"
          ? "hover:text-red"
          : disabled
          ? ""
          : "hover:text-primary"
      }`}
    >
      {icon ? <div className="mr-[22px]">{icon}</div> : null}
      {children}
    </div>
  );
};

export default MenuItem;
