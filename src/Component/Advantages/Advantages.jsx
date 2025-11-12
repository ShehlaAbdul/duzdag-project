import React from 'react';
import "./Style.scss";
import { PiDotOutlineFill } from "react-icons/pi";
import MainImg from "../../assets/images/advantages-main.webp";
import SecondImg from "../../assets/images/advantages-2.webp"

function Advantages() {
  return (
    <section id="advantages">
      <div className="advantages container-fluid g-0 row p-0 m-0">
        <div className="text-side col-12 col-xl-7">
          <div className="head-text">
            <h1>Sağlamlığınıza Dəyər Qatan Təcrübə</h1>
            <p>
              Dəniz səviyyəsindən 1100 metr hündürlükdə yerləşən Duzdağ Müalicə
              Mərkəzi 1979-cu ildən fəaliyyət göstərir. Mərkəzin yerləşdiyi
              Duzdağın yeraltı hissəsi labirint şəklindədir və ümumi uzunluğu 46
              kilometrdir. Girişdən 360 metr məsafədə, 110 metr dərinlikdə
              yerləşən bu unikal məkan təbii şəfalı mikroiqlimə malikdir.
            </p>
          </div>
          <div className="bottom-text">
            <h3>Üstünlüklər:</h3>
            <ul className="m-0 p-0 ">
              <li className="d-flex align-items-center">
                <PiDotOutlineFill />
                İlin bütün fəsillərində havanın temperaturunun 18-20°C olması
              </li>
              <li>
                <PiDotOutlineFill />
                Horizontal yerləşmə və təbii havalandırma
              </li>
              <li>
                <PiDotOutlineFill />
                Mikrobların və allergenlərin yox dərəcəsində olması
              </li>
              <li>
                <PiDotOutlineFill />
                Rütubət və temperaturun daimi sabit qalması
              </li>
            </ul>
          </div>
        </div>
        <div className="img-side col-12 col-xl-5">
          <div className="main-img">
            <img src={MainImg} alt="" />
          </div>
          <div className="badge-box">
            <div className="box-container">
              <h4>40+5</h4>
              <p>İldir fəaliyyət göstərir</p>
            </div>
          </div>
          <div className="second-img">
            <img src={SecondImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
