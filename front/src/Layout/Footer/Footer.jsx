import React from 'react';
import "./Style.scss";
import Logo from "../../assets/images/logo-white.png";
import LogoPasha from "../../assets/images/logo-pasha.webp";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <div className="footer container-fluid g-0">
        <div className="row">
          <div className="left-side col-12   col-lg-4 ">
            <div className="logo-side d-flex pb-3">
              <img src={Logo} alt="" className="logo1" />
              <img src={LogoPasha} alt="" className="logo2" />
            </div>
            <div className="text-side d-flex flex-column gap-2">
              <h3>“ Duzdağ Müalicə Mərkəzi ” MMC</h3>
              <p>
                {" "}
                Təbiətin şəfalı gücü ilə sağlamlığınızı Duz Dağda yenidən kəşf
                edin. Nəfəs alın, rahatlayın, sağalın.
              </p>
            </div>
            <div className="icons-side d-flex">
              <img src={Instagram} alt="" className="icon" />
              <img src={Facebook} alt="" className="icon" />
            </div>
          </div>
          <div className="middle-side col-12 col-sm-6  col-lg-4 ">
            <h5>Sürətli Keçid</h5>
            <ul className="d-flex flex-column gap-3 m-0 p-0">
              <li>
                <Link to={"/"}>Ana Səhifə</Link>
              </li>
              <li>
                <Link to={"/about"}>Haqqımızda</Link>
              </li>
              <li>
                <Link to={"/services"}>Xidmətlər</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Qalereya</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Əlaqə</Link>
              </li>
            </ul>
          </div>
          <div className="right-side col-12 col-sm-6 col-lg-4 m-0">
            <h5>Əlaqə</h5>
            <ul className="d-flex flex-column gap-3 p-0">
              <li>
                <FiMail size={20} />
                <span>duzdagmmc@gmail.com</span>
              </li>
              <li>
                <FiPhone size={20} />
                <span>(+994) 60 330 55 55</span>
              </li>
              <li>
                <GrLocation size={20} />
                <span>Naxçıvan, Duzdağ dağ massivinin ətəyi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
