import React from "react";

const MenuItem = ({ icon, children, onClick, type = "normal" }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full flex items-center px-[22px] py-2 cursor-pointer duration-200 text-sm text-dark font-semibold ${
        type === "delete" ? "hover:text-red" : " hover:text-primary"
      }`}
    >
      {icon ? <div className="mr-[22px]">{icon}</div> : null}
      {children}
    </div>
  );
};

export default MenuItem;
