import React from "react";
import MenuItem from "./menuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length ? list.map((item,index)=> <MenuItem key={index} item={item}></MenuItem>) : null}
    </ul>
  );
};

export default MenuList;
