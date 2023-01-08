import React from "react";
import Card from "../atoms/Card";
import { CgClose } from "react-icons/cg";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import TextField from "../atoms/TextField";

const AddTodo = ({ data, handleChange, onClose, handleSave }) => {
  return (
    <Card onClose={onClose}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-dark font-bold text-[18px]">Add New Group</h1>
        <CgClose
          className="cursor-pointer text-dark"
          size={24}
          onClick={onClose}
        />
      </div>
      <Input
        onChange={(e) => handleChange("title", e.target.value)}
        styling="mb-4"
        label="Title"
        placeholder="Insert Title"
        value={data.title}
      />
      <TextField
        onChange={(e) => handleChange("description", e.target.value)}
        styling="mb-6 h-[88px]"
        label="Description"
        placeholder="Insert Description"
        type="number"
        value={data.description}
      />
      <div className="flex justify-end">
        <Button styling="mr-[10px]" onClick={onClose} buttonType="white">
          Cancel
        </Button>
        <Button onClick={handleSave} buttonType="primary">
          Save Task
        </Button>
      </div>
    </Card>
  );
};

export default AddTodo;
