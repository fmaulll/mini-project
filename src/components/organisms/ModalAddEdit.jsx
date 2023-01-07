import React from "react";
import Modal from "../atoms/Modal";
import AddEditTask from "../molecules/AddEditTask";

const ModalAddEdit = ({data, handleChange, type, onClose}) => {
  return (
    <Modal>
      <AddEditTask handleChange={handleChange} data={data} type={type} onClose={onClose} />
    </Modal>
  );
};

export default ModalAddEdit;
