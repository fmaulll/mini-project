import React, { useEffect, useRef, useState } from "react";
import { useOutside } from "../../hooks/useOutside";
import MenuItem from "../atoms/MenuItem";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

const Menu = ({ todos = [], item, onClose, handleClickMenu }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState(null);
  useOutside(ref, onClose);

  const getPosition = () => {
    const todo = todos.findIndex((todo) => todo.id === item.todo_id);
    setPosition(todo);
  };

  useEffect(() => {
    getPosition();
  });
  return (
    <div
      ref={ref}
      className="absolute z-10 right-0 bg-white rounded-lg shadow-2xl py-[14px] w-[320px]"
    >
      <MenuItem
        disabled={position === todos.length - 1}
        onClick={() => {
          handleClickMenu("right", {
            ...item,
            target_todo_id: todos[position + 1].id,
          });
          onClose();
        }}
        icon={<ImArrowRight2 />}
      >
        Move Right
      </MenuItem>
      <MenuItem
        disabled={position === 0}
        onClick={() => {
          handleClickMenu("left", {
            ...item,
            target_todo_id: todos[position - 1].id,
          });
          onClose();
        }}
        icon={<ImArrowLeft2 />}
      >
        Move Left
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickMenu("edit", item);
          onClose();
        }}
        icon={<BiEditAlt />}
      >
        Edit
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClickMenu("delete", item);
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
