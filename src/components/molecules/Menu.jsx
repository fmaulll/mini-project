import React, { useRef } from "react";
import { useOutside } from "../../hooks/useOutside";
import MenuItem from "../atoms/MenuItem";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

const Menu = ({ onClose }) => {
  const ref = useRef(null);
  useOutside(ref, onClose);
  return (
    <div
      ref={ref}
      className="absolute z-10 right-0 bg-white rounded-lg shadow-2xl py-[14px] w-[320px]"
    >
      <MenuItem icon={<ImArrowRight2 />}>Move Right</MenuItem>
      <MenuItem icon={<ImArrowLeft2 />}>Move Left</MenuItem>
      <MenuItem icon={<BiEditAlt />}>Edit</MenuItem>
      <MenuItem type="delete" icon={<FaRegTrashAlt />}>Delete</MenuItem>
    </div>
  );
};

export default Menu;
