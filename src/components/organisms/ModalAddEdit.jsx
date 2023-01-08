import React from "react";
import Modal from "../atoms/Modal";
import AddEditTask from "../molecules/AddEditTask";

const ModalAddEdit = ({data, handleChange, type, onClose, handleSave}) => {
  return (
    <Modal>
      <AddEditTask handleSave={handleSave} handleChange={handleChange} data={data} type={type} onClose={onClose} />
    </Modal>
  );
};

export default ModalAddEdit;
