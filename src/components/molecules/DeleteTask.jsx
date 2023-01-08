import React, { useRef } from "react";
import Card from "../atoms/Card";
import { HiOutlineExclamation } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Button from "../atoms/Button";

const DeleteTask = ({ handleDelete, onClose }) => {
  return (
    <Card onClose={onClose}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <HiOutlineExclamation className="text-red mr-2" size={24} />
          <h1 className="text-dark font-bold text-[18px]">Delete Task</h1>
        </div>
        <CgClose className="cursor-pointer text-dark" size={24} onClick={onClose} />
      </div>
      <p className="text-[14px] font-normal mb-4">Are you sure want to delete this task? your action can’t be reverted.</p>
      <div className="flex justify-end">
        <Button styling="mr-[10px]" onClick={onClose} buttonType="white">Cancel</Button>
        <Button onClick={handleDelete} buttonType="red">Delete</Button>
      </div>
    </Card>
  );
};

export default DeleteTask;
