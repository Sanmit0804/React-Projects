import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
      {list && list.length
        ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
