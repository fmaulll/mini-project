import React from "react";
import Button from "../../components/atoms/Button";
import { TiPlus } from "react-icons/ti";

const Header = ({handleClickAdd}) => {
  return (
    <div className="h-16 border border-b-primary w-full px-5 flex items-center">
        <h1 className="font-bold text-[18px] mr-[10px]">Product Roadmap</h1>
      <Button onClick={handleClickAdd} buttonType="primary" icon={<TiPlus />}>Add New Group</Button>
    </div>
  );
};

export default Header;
