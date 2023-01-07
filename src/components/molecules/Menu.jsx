import React, { useRef } from "react";
import { useOutside } from "../../hooks/useOutside";
import MenuItem from "../atoms/MenuItem";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

const Menu = ({ onClose, handleClickMenu, id }) => {
  const ref = useRef(null);
  useOutside(ref, onClose);
  return (
    <div
      ref={ref}
      className="absolute z-10 right-0 bg-white rounded-lg shadow-2xl py-[14px] w-[320px]"
    >
      <MenuItem
        onClick={() => {
          handleClickMenu("right");
          onClose();
        }}
        icon={<ImArrowRight2 />}
      >
        Move Right
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickMenu("left");
          onClose();
        }}
        icon={<ImArrowLeft2 />}
      >
        Move Left
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickMenu("edit");
          onClose();
        }}
        icon={<BiEditAlt />}
      >
        Edit
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickMenu("delete");
          onClose();
        }}
        type="delete"
        icon={<FaRegTrashAlt />}
      >
        Delete
      </MenuItem>
    </div>
  );
};

export default Menu;
