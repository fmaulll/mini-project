import React from "react";
import Card from "../atoms/Card";
import { CgClose } from "react-icons/cg";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const AddEditTask = ({ data, handleChange, type, onClose }) => {
  return (
    <Card onClose={onClose}>
      <div className="flex justify-between items-center mb-6">
        {type === "edit" ? (
          <h1 className="text-dark font-bold text-[18px]">Edit Task</h1>
        ) : (
          <h1 className="text-dark font-bold text-[18px]">Create Task</h1>
        )}
        <CgClose
          className="cursor-pointer text-dark"
          size={24}
          onClick={onClose}
        />
      </div>
      <Input
        onChange={(e) => handleChange("name", e.target.value)}
        styling="mb-4"
        label="Task Name"
        placeholder="Type your Task"
        value={data.name}
        />
      <Input
        onChange={(e) => handleChange("progress_percentage", e.target.value)}
        styling="mb-6 w-[143px]"
        label="Progress"
        placeholder="70%"
        type="number"
        value={data.progress_percentage}
      />
      <div className="flex justify-end">
        <Button styling="mr-[10px]" onClick={onClose} buttonType="white">
          Cancel
        </Button>
        <Button buttonType="primary">Save Task</Button>
      </div>
    </Card>
  );
};

export default AddEditTask;
