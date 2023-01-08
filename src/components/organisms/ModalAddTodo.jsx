import React from "react";
import Modal from "../atoms/Modal";
import AddEditTask from "../molecules/AddEditTask";
import AddTodo from "../molecules/AddTodo";

const ModalAddTodo = ({data, handleChange, onClose, handleSave}) => {
  return (
    <Modal>
      <AddTodo data={data} handleSave={handleSave} handleChange={handleChange} onClose={onClose} />
    </Modal>
  );
};

export default ModalAddTodo;
