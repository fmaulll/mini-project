import React from "react";

const MenuItem = ({ icon, children, onClick }) => {
  return (
    <div onClick={onClick} className="w-full flex items-center px-[22px]">
      {icon ? <div className="mr-[22px]">{icon}</div> : null}
      <h1 className="text-sm text-dark font-semibold">{children}</h1>
    </div>
  );
};

export default MenuItem;
