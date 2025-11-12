import React, { useEffect, useState } from "react";
import "./Style.scss";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Logo from "../../assets/images/logo-blue.webp";
import LogoWhite from "../../assets/images/logo_white.webp";
import Logo2 from "../../assets/images/logo-pasha.webp"
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
// import Logo from "../../assets/images/nav-logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

function Header() {
  const [scroll, setScroll] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <div className={`header ${scroll ? "scroll" : ""}`}>
      <div className="top-bar d-none d-lg-flex">
        <div className="content container-fluid d-flex">
          <div className="d-flex align-items-center gap-2">
            <div className="icon">
              {" "}
              <img src={Mail} alt="" />
            </div>
            <span>duzdagmmc@gmail.com</span>
          </div>
          <div className="d-flex gap-2">
            <div className="icon">
              <img src={Phone} alt="" />
            </div>
            <span>(+994) 60 330 55 55</span>
          </div>
        </div>
      </div>

      <div className="custom-navbar navbar-expand-lg px-3  px-md-5 px-lg-1  d-flex align-items-center justify-content-between ">
        <div className="logo-side col-auto d-flex gap-2">
            <Link to={"/"} className="logo1">
              <img src={Logo2} alt="" />
            </Link>
          <Link to={"/"} className="logo ">
            <img src={scroll ? LogoWhite : Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar mx-auto d-none d-lg-flex gap-2 align-items-center">
          <ul className="d-flex gap-4 m-0">
            <li className="nav-item py-1">
              <Link to={"/"} className={linkClass}>
                Ana səhifə
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to={"/about"} className={linkClass}>
                Haqqımızda
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to={"/services"} className={linkClass}>
                Xidmətlər
              </Link>
            </li>
            <li className="galery py-1">
              <Link to={"/gallery"} className="galery-link">
                <span className="pe-1">Qalereya</span>
                <IoIosArrowDown className="arrow" />
              </Link>
              <div className="galery-drop">
                <span>
                  <Link to={"/gallery-photos"}>Şəkillər</Link>
                </span>
                <span>
                  <Link to={"gallery-videos"}>Videolar</Link>
                </span>
              </div>
            </li>
            <li className="nav-item py-1">
              <Link to={"/contact-us"} className={linkClass}>
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end align-items-center gap-0">
          <div className="d-block d-lg-none  " onClick={toggleSidebar}>
            <HiBars3 size={20} className="bar" />
          </div>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center px-3 py-3 border-bottom">
          <div className="d-flex align-items-center justify-content-between w-100 ">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" className="nav-logo" />
            </Link>
            <div className=" ">
              <LiaTimesSolid size={20} onClick={toggleSidebar} />
            </div>
          </div>
        </div>
        <div className="sidebar-body d-flex flex-column align-items-center  py-4 gap-3">
          <div className="w-100 align-items-start  ">
            <Link to="/" className="nav-link">
              Ana Səhifə
            </Link>
            <Link to="/about" className="nav-link">
              Haqqımızda
            </Link>

            <Link to="/services" className="nav-link">
              Xidmətlər
            </Link>
            <Link to="/products" className="nav-link">
              Məhsullar
            </Link>
            <Link to="/news" className="nav-link">
              Xəbərlər
            </Link>
            <Link to="/partners" className="nav-link">
              Partnyorlar
            </Link>
            <Link to="/contact" className="nav-link">
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      {/* <div className="navbar mx-auto d-none d-lg-flex gap-2 align-items-center">
        <div className="container-fluid row ">
          <div className="logo col-auto">
            <Link to={"/"}>
              <img src={scroll ? LogoWhite : Logo} alt="Logo" />
            </Link>
          </div>
          <div className="right-side col    d-flex justify-content-center ">
            <ul className="d-flex gap-4  m-0 py-3">
              <li className="nav-item py-1">
                <Link to={"/"} className={linkClass}>
                  Ana səhifə
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to={"/about"} className={linkClass}>
                  Haqqımızda
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to={"/services"} className={linkClass}>
                  Xidmətlər
                </Link>
              </li>
              <li className="galery py-1">
                <Link to={"/gallery"} className="galery-link">
                  <span className="pe-1">Qalereya</span>
                  <IoIosArrowDown className="arrow" />
                </Link>
                <div className="galery-drop">
                  <span>
                    <Link to={"/gallery-photos"}>Şəkillər</Link>
                  </span>
                  <span>
                    <Link to={"gallery-videos"}>Videolar</Link>
                  </span>
                </div>
              </li>
              <li className="nav-item py-1">
                <Link to={"/contact-us"} className={linkClass}>
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
