import React from 'react';
import "./Style.scss";
import Arrow from "../../assets/icons/arrow-right.svg";


function ReadMoreBtn({ title }) {
    return (
      <button className="read-more">
            <span>{title}</span>
            <img src={Arrow} alt="" className='arrow'/>
      </button>
    );
}

export default ReadMoreBtn;
