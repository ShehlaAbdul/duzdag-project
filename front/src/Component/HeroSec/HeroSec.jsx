import React from 'react';
import "./Style.scss";
import { IoIosArrowForward } from "react-icons/io";


function HeroSec({title}) {
  return (
    <section id="hero-section">
      <div className="hero-section">
        <div className="text-side d-flex flex-column align-items-center justify-content-center">
          <h1>{title}</h1>
          <div className='d-flex align-items-center gap-md-3 fs-md-4'>
            <span>Ana Səhifə</span>
            <IoIosArrowForward />
            <span >{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
