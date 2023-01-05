import React, { useState, useEffect } from "react";
import { FaSearch, FaRegHeart, FaCartPlus, FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import NavBarsMobile from "./NavBarMobile";
import BackDrop from "../../UI/BackDrop/BackDrop";
import LinkItems from "./LinkItems";
import DropDown from "./DropDown";
import ProductCart from "./ProductCart";
import { productTypeListAction } from '../../../Redux/Actions/productsActions';

import "./MainHeader.css";

const MainHeader = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productTypeListAction())
  }, [dispatch])

  const { pType } = useSelector((state) => state.pTypeList);
  const handleDropMenu = () => {
    setDropMenu(!dropMenu);
  };
  return (
    <header className="header">
      {dropMenu ? <BackDrop handleDropMenu={handleDropMenu} /> : null}
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header-right d-flex">
            <button className="btn-burger-menu" onClick={handleDropMenu}>
              <FaBars />
            </button>
            <Link to="/" className="brand-logo">
              <img src="./assest/images/logo.png" />
            </Link>
            <NavBarsMobile
              pType={pType}
              dropMenu={dropMenu}
              handleDropMenu={handleDropMenu}
            />
            <nav className="nav-head">
              <ul className="nav-list">
                <LinkItems adress="/" name="خانه">
                  <div className="inline-nav"></div>
                </LinkItems>
                <LinkItems>
                  <a href="#">
                    فروشگاه
                    <span>
                      <RiArrowDropDownLine fontSize={20} />
                    </span>
                    <DropDown pType={pType} />
                  </a>
                  <div className="inline-nav"></div>
                </LinkItems>
                <LinkItems adress="#" name="جدیدترین اخبار">
                  <div className="inline-nav"></div>
                </LinkItems>
                <LinkItems adress="#" name="مقاله ها">
                  <div className="inline-nav"></div>
                </LinkItems>
                <LinkItems adress="#" name="درباره ما">
                  <div className="inline-nav"></div>
                </LinkItems>
                <LinkItems adress="#" name="تماس با ما">
                  <div className="inline-nav"></div>
                </LinkItems>
              </ul>
            </nav>
          </div>
          <div className="header-left d-flex">
            <div className="search-box">
              <form className="form-group">
                <input type="text" placeholder="جستجوی محصول..." required />
                <button className="btn-search-box">
                  <FaSearch fontSize={17} />
                </button>
              </form>
            </div>
            <a href="#" className="heart mx-4 d-flex align-items-center">
              <FaRegHeart fontSize={23} />
            </a>
            <div className="cart  d-flex align-items-center p-relative">
              <a href="#">
                <span className="circle-count">2</span>
                <FaCartPlus fontSize={23} />
              </a>
              <ProductCart/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
