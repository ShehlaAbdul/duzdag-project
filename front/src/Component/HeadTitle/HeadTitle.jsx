import React from 'react';
import "./Style.scss";

function HeadTitle({title}) {
  return (
    <button className='title-btn'> 
      {title}
    </button>
  );
}

export default HeadTitle;
