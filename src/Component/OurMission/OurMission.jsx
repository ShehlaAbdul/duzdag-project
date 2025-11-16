import React from 'react';
import "./Style.scss";
import MainImg from "../../assets/images/about-img.jpg";
import { GiCheckMark } from 'react-icons/gi';

function OurMission() {
  return (
    <section id="our-mission">
      <div className="our-mission row">
        <div className="img-side  col-12 col-xl-5">
          <div className="img">
            <img src={MainImg} alt="" className="" />
          </div>
          <div className="text">
            <div className="text-content">
              <h5>Əsas dəyərlərimiz</h5>
              <ul className="d-flex flex-column p-0">
                <li>
                  <GiCheckMark />
                  <span>Təbiətin şəfasına inanırıq</span>
                </li>
                <li>
                  <GiCheckMark />
                  <span>İnsan mərkəzli yanaşma</span>
                </li>
                <li>
                  <GiCheckMark />
                  <span>Etibar və keyfiyyət</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-side d-flex flex-column  col-12 col-md-12 col-xl-6">
          <div className="vision">
            <div>
              <h4>VİZYONUMUZ</h4>
            </div>
            <h3>
              Duz Dağ Müalicə Mərkəzini regionda və beynəlxalq səviyyədə
              tanınan, innovativ və etibarlı sağlamlıq mərkəzi etmək
            </h3>
          </div>
          <div className="vision">
            <div>
              <h4>MİSSİYAMIZ</h4>
            </div>
            <h3>
              Təbii duz mağaralarının şəfalı mühitini müasir tibbi
              texnologiyalarla birləşdirərək, tənəffüs yolları xəstəliklərinin
              effektiv, təhlükəsiz və dərmansız müalicəsini təmin etməkdir.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
