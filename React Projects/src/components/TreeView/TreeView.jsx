import React from "react";
import "./TreeView.css";
import menus from "./data";
import MenuList from "./menuList";

const TreeView = ({menus = []}) => {
  return (
    <>
      <div className="treeView">
        <MenuList list= {menus}></MenuList>
      </div>
    </>
  );
};

export default TreeView;
