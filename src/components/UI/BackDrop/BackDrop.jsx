import React from "react";

import "./BackDrop.css";

const BackDrop = ({ handleDropMenu }) => {
  return <div onClick={handleDropMenu} className="back-drop"></div>;
};
export default BackDrop;
