import React, { Fragment, useState } from "react";
import ModalDelete from "../components/organisms/ModalDelete";
import TodoGroup from "../components/organisms/TodoGroup";

const dummy = [
  {
    title: "Task Group 10",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 37 },
      { title: "Ngepel rumah pak joe koe wee", progress: 20 },
      { title: "Ngepel rumah pak joe koe wee", progress: 98 },
      { title: "Ngepel rumah pak joe koe wee", progress: 24 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 70 },
      { title: "Ngepel rumah pak joe koe wee", progress: 100 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 30 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
  {
    title: "Task Group 1",
    date: "March - May",
    tasks: [
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
      { title: "Ngepel rumah pak joe koe wee", progress: 50 },
    ],
  },
];

const TodoPage = () => {
  const [openDelete, setOpenDelete] = useState(true);

  const handleMoveRight = async() => {

  }
  const handleMoveLeft = async() => {

  }

  const handleActionMenu = (type) => {
    if(type === "right"){
      handleMoveRight()
    }
    if(type === "left"){
      handleMoveLeft()
    }
    if(type === "edit"){
      handleMoveLeft()
    }
    if(type === "delete"){
      setOpenDelete(true)
    }
  }

  return (
    <Fragment>
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4">
          {dummy.map((item, index) => (
            <TodoGroup data={item} index={index} key={index} handleActionMenu={handleActionMenu} />
          ))}
        </div>
      </div>
      {openDelete && <ModalDelete onClose={() => setOpenDelete(false)} />}
    </Fragment>
  );
};

export default TodoPage;
