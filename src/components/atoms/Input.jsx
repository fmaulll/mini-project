import React, { Fragment, useRef } from "react";

const Input = ({ label = "", styling, ...other }) => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      {label !== "" ? (
        <label onClick={handleFocus} className="font-bold text-[#404040]">
          {label}
        </label>
      ) : null}
      <div className={`border-2 border-[#EDEDED] rounded-xl py-2 px-4 ${styling} ${label !== "" ? "mt-2" : ""}`}>
        <input ref={inputRef} className="focus:outline-none w-full" {...other} />
      </div>
    </div>
  );
};

export default Input;
