import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ModalAddTodo from "../components/organisms/ModalAddTodo";
import Header from "./Header";

// then I realize, I should've use redux at this point.

const initData = {
  title: "",
  description: "",
};

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSave = async () => {
    if(data.title === "" || data.description === ""){
      alert("Input can't be empty!")
      return
    }
    const token = localStorage.getItem("token");
    try {
      const result = await axios({
        url: `https://todo-api-18-140-52-65.rakamin.com/todos`,
        method: "POST",
        data,
        headers: { authorization: `Bearer ${token}` },
      });
      if (result.status === 201) {
        setOpen(false);
        window.location.reload();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setData(initData);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.pathname = "/v1";
    }
  }, []);

  return (
    <Fragment>
      <div className="h-screen">
        <Header handleClickAdd={handleOpenModal} />
        {children}
      </div>
      {open && (
        <ModalAddTodo
          data={data}
          onClose={handleClose}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      )}
    </Fragment>
  );
};

export default Layout;
