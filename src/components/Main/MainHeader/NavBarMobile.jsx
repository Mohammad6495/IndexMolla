import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

import LinkItems from "./LinkItems";
import DropDownMobile from "./DropDownMobile";

const NavBarsMobile = ({ dropMenu, handleDropMenu, pType }) => {
  const [item, setItem] = useState(false);
  const handleClickLink = () => {
    setItem(!item);
  };
  return (
    <div
      className="nav-bars-mobile"
      style={dropMenu ? { right: "0" } : { right: "-100%" }}
    >
      <button className="btn-close" onClick={handleDropMenu}></button>
      <div className="mobile-search d-flex justify-content-center">
        <form className="form-group">
          <input type="text" placeholder="جستجو در ..." />
          <button className="btn-mobile-search">
            <FaSearch fontSize={12} />
          </button>
        </form>
      </div>
      <ul className="menu-bars-mobile d-flex flex-column">
        <LinkItems adress="#" name="خانه"></LinkItems>
        <li onClick={handleClickLink}>
          <div className="content-link">
            <a href="#">فروشگاه</a>
            <span>
              <RiArrowDropDownLine
                className={`drop-toggle ${item ? "show-drop" : ""}`}
                fontSize={24}
                color="#999999"
              />
            </span>
          </div>
          <DropDownMobile pType={pType} item={item} />
        </li>
        <LinkItems adress="#" name="جدیدترین اخبار"></LinkItems>
        <LinkItems adress="#" name="مقاله ها"></LinkItems>
        <LinkItems adress="#" name="درباره ما"></LinkItems>
        <LinkItems adress="#" name="تماس با ما"></LinkItems>
      </ul>
      <div className="media-menu">
        <a href="#">
          <FaInstagram title="Instagram" />
        </a>
        <a href="#">
          <FaYoutube title="YouTube" />
        </a>
        <a href="#">
          <FaFacebook title="FaceBook" />
        </a>
        <a href="#">
          <FaTwitter title="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default NavBarsMobile;
