import React from "react";
import Modal from "../atoms/Modal";
import DeleteTask from "../molecules/DeleteTask";

const ModalDelete = ({onClose}) => {
  return (
    <Modal>
      <DeleteTask onClose={onClose} />
    </Modal>
  );
};

export default ModalDelete;
