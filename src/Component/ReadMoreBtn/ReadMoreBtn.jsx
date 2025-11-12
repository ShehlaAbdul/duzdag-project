import React from 'react';
import "./Style.scss";
import Arrow from "../../assets/icons/arrow-right.svg";
import { FaArrowUpLong } from "react-icons/fa6";

function ReadMoreBtn({ title }) {
    return (
      <button className="read-more">
        <span>{title}</span>
        <div className="arrow">
          <FaArrowUpLong />
        </div>
      </button>
    );
}

export default ReadMoreBtn;
