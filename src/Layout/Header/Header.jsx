import React, { useEffect, useState } from "react";
import "./Style.scss";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Logo from "../../assets/images/logo_blue.webp";
import LogoWhite from "../../assets/images/logo-white.png";
import Logo2 from "../../assets/images/logo-pasha2.webp";
import Logo3 from "../../assets/images/logo_pasha3.webp";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
// import Logo from "../../assets/images/nav-logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";


function Header() {
  const [scroll, setScroll] = useState(false); //scroll state
  const [isOpen, setIsOpen] = useState(false); //sidebar state
  const [isOpenGalery, setIsOpenGalery] = useState(false); //mobile galery dropdown state
  // const [galleryType, setGalleryType] = useState("photos"); //photos or videos state 

  const navigate = useNavigate(); //router navigate function
 
  // Change header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleGalleryChange = (e) => {
    const selected = e.target.value;
    setGalleryType(selected);
    navigate("/gallery"); // qalereya səhifəsinə yönləndir
  };



  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <div className={`header  ${scroll ? "scroll" : ""}`}>
      <div className="top-bar d-none d-lg-flex">
        <div className="content container-fluid d-flex g-0">
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

      <div className="custom-navbar navbar-expand-lg  d-flex align-items-center justify-content-between row g-0 ">
        <div className="logo-side col-6 col-md-3 d-flex gap-2 ">
          <Link to={"/"} className="logo1">
            <img src={scroll ? Logo3 : Logo2} alt="Logo" />
          </Link>
          <Link to={"/"} className="logo ">
            <img src={scroll ? LogoWhite : Logo} alt="Logo" />
          </Link>
        </div>  
        <div className="navbar  d-none d-lg-flex gap-2 align-items-center justify-content-center col-6 ">
          <ul className="d-flex gap-4 m-0">
            <li className="nav-item py-1">
              <NavLink to={"/"} className={linkClass}>
                Ana səhifə
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <NavLink to={"/about"} className={linkClass}>
                Haqqımızda
              </NavLink>
            </li>
            <li className="nav-item py-1">
              <Link to={"/services"} className={linkClass}>
                Xidmətlər
              </Link>
            </li>
            <li className="galery py-1">
              <NavLink className="galery-link">
                <span className="pe-1">Qalereya</span>
                <IoIosArrowDown className="arrow" />
              </NavLink>
              <div className="galery-drop">
                <span>
                  <NavLink to="/gallery/photos">Şəkillər</NavLink>
                </span>
                <span>
                  <NavLink to="/gallery/videos">Videolar</NavLink>
                </span>
              </div>
            </li>
            <li className="nav-item py-1">
              <NavLink to={"/contact-us"} className={linkClass}>
                Əlaqə
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="col-3 border ">
          h
        </div> */}
        <div className="d-flex justify-content-end align-items-center gap-0 col-3">
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

            <div
              className={`nav-link galery-mobile d-flex align-items-center ${
                isOpenGalery ? "active" : ""
              }`}
              onClick={() => setIsOpenGalery(!isOpenGalery)}
            >
              <span className="pe-1">Qalereya</span>
              <div>
                <IoIosArrowDown
                  className={`arrow ${isOpenGalery ? "rotate" : ""}`}
                />
              </div>
            </div>
            {isOpenGalery && (
              <div className="galery-drop-mobile">
                <span>
                  <Link to="/gallery/photos">Şəkillər</Link>
                </span>
                <span>
                  <Link to="/gallery/videos">Videolar</Link>
                </span>
              </div>
            )}

            <Link to="/contact-us" className="nav-link">
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      {/* <Outlet context={{ galleryType }} /> */}
      {/* <Outlet context={{ galleryType, setGalleryType }} /> */}
    </div>
  );
}

export default Header;
