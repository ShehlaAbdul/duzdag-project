import React from 'react';
import "./Style.scss";
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn';
import Vector from "../../assets/images/vector.png";
function HomeHero() {
  return (
    <section id="hero-sec" className="hero-sec  ">
      <div className="hero-sec-container d-flex  align-items-center">
        <div className="text-side d-flex flex-column">
          <h1>DuzDağda Sağlamlığınızı Təbii Yolla Bərpa Edin</h1>
          <p>
            Təbiətin şəfalı gücü və peşəkar yanaşma ilə nəfəsinizi,
            sağlamlığınızı və rahatlığınızı geri qazanın.
          </p>
          <div className="">
            {" "}
            <ReadMoreBtn title={"Ətraflı öyrən"} />
          </div>
        </div>
        <div className="hero-badge">
          <p>“1979-cu ildən sizinləyik!”</p>
          <div className="vector ">
            <img src={Vector} alt="" />
          </div>
          <div className="vector2 ">
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
