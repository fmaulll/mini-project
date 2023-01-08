import React, { Fragment, useRef } from "react";

const TextField = ({ label = "", styling, ...other }) => {
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
      <div>
        <textarea
          ref={inputRef}
          className={`border-2 border-[#EDEDED] rounded-xl py-2 px-4 focus:outline-none w-full ${styling} ${
            label !== "" ? "mt-2" : ""
          }`}
          {...other}
        ></textarea>
      </div>
    </div>
  );
};

export default TextField;
