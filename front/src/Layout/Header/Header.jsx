import React, { useEffect, useState } from "react";
import "./Style.scss";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Logo from "../../assets/images/logo-blue.webp";
import LogoWhite from "../../assets/images/logo_white.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [])
  
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <div className={`header ${scroll ? "scroll" : ""}`}>
      <div className="top-bar d-none d-md-flex">
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
      <div className="navbar ">
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
                  <IoIosArrowDown  className="arrow"/>
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
      </div>
    </div>
  );
}

export default Header;
