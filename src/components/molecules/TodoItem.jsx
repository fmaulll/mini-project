import React, { Fragment, useState } from "react";
import Progress from "../atoms/Progress";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import Menu from "./Menu";

const TodoItem = ({ todos, item, addStyle, handleActionMenu }) => {
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(true);
  };
  return (
    <div className={`relative p-4 border border-[#E0E0E0] rounded ${addStyle}`}>
      <h1 className="font-bold text-dark">{item.name}</h1>
      <div className="w-full flex items-center">
        <Progress progress={item.progress_percentage} />
        {item.progress_percentage === 100 ? (
          <HiCheckCircle className="ml-4 mr-[26px]" color="#43936C" size={32} />
        ) : (
          <h1 className="ml-4 mr-[26px] text-sm text-[#757575]">
            {item.progress_percentage}%
          </h1>
        )}
        <FiMoreHorizontal
          onClick={handleClickMenu}
          className="cursor-pointer w-6 flex justify-center items-center hover:bg-[#EDEDED] duration-200 rounded"
          color="#757575"
        />
      </div>
      {open ? (
        <Menu
          item={item}
          handleClickMenu={handleActionMenu}
          onClose={() => setOpen(false)}
          todos={todos}
        />
      ) : null}
    </div>
  );
};

export default TodoItem;
