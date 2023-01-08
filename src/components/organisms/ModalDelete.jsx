import React from "react";
import Modal from "../atoms/Modal";
import DeleteTask from "../molecules/DeleteTask";

const ModalDelete = ({handleDelete, onClose}) => {
  return (
    <Modal>
      <DeleteTask handleDelete={handleDelete} onClose={onClose} />
    </Modal>
  );
};

export default ModalDelete;
