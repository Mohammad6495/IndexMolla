import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ pType }) => {
  return (
    <div className="nav-dropdown">
      {pType.map((item) => {
        return (
          <Link key={item.id} to="#">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default DropDown;
