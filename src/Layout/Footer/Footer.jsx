import React, { useState } from "react";
import "./Style.scss";
import Logo from "../../assets/images/logo-white.png";
import LogoPasha from "../../assets/images/logo-pasha2.webp";
import LogoPasha2 from "../../assets/images/logo_pasha3.webp";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  const [isOpenGalery, setIsOpenGalery] = useState(false);
  return (
    <footer>
      <div className="footer container-fluid g-0">
        <div className="row">
          <div className="left-side col-12   col-lg-5 ">
            <div className="logo-side d-flex mb-3">
              <img src={LogoPasha} alt="" className="logo2 " />
              <img src={Logo} alt="" className="logo1" />
            </div>
            <div className="text-side d-flex flex-column gap-2">
              <h3>“ Duzdağ Müalicə Mərkəzi ” MMC</h3>
              <p>
                {" "}
                "Duzdağ Müalicə Mərkəzi” Məhdud Məsuliyyətli Cəmiyyəti Naxçıvan
                Muxtar Respublikası Həmkarlar İttifaqları Şurasının tabeliyində
                fəaliyyət göstərir.
              </p>
            </div>
            <div className="icons-side d-flex align-items-center">
              <Link to="https://www.instagram.com/duzdag_mualice_merkezi/">
                {" "}
                <img src={Instagram} alt="" className="icon" />
              </Link>
              <img src={Facebook} alt="" className="icon" />
            </div>
          </div>
          <div className="middle-side col-12 col-sm-6  col-lg-3 ">
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
                <Link to="/gallery/photos">Şəkillər</Link>
              </li>
              <li>
                <Link to="/gallery/videos">Videolar</Link>
              </li>
              {/* <li>
                <div
                  className={`nav-link galery-mobile d-flex align-items-center ${
                    isOpenGalery ? "active" : ""
                  }`}
                  onClick={() => setIsOpenGalery(!isOpenGalery)}
                >
                  <Link className="pe-2">Qalereya</Link>
                  <div>
                    <IoIosArrowDown
                      className={`arrow ${isOpenGalery ? "rotate" : ""}`}
                    />
                  </div>
                </div>
                {isOpenGalery && (
                  <div className="galery-drop-mobile">
                    <span>
                      <Link to="/gallery-photos">Şəkillər</Link>
                    </span>
                    <span>
                      <Link to="/gallery/videos">Videolar</Link>
                    </span>
                  </div>
                )}
              </li> */}
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
                <span>
                  Naxçıvan Muxtar Respublikası, Duzdağ dağ massivinin ətəyi
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex  justify-content-between ">
          <p>
            © 2023 - {new Date().getFullYear()} NMR Həmkarlar İttifaqları Şurası
            | Bütün Hüquqlar Qorunur.
          </p>
          <p className="left">Rzayev Kanan Studio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
