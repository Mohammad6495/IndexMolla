import React from "react";
import { Link } from "react-router-dom";

const DropDownMobile = ({ pType, item }) => {
  return (
    <div className={`nav-dropdown-mobile ${item ? "active-content" : ""}`}>
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

export default DropDownMobile;
