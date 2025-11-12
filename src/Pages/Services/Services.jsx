import React from 'react';
import "./Style.scss";
import HeroSec from '../../Component/HeroSec/HeroSec';
import OurServices from '../../Component/OurServices/OurServices';


function Services() {
  return (
      <div>
          <HeroSec title={"Xidmətlər"} />
          <OurServices/>
    </div>
  );
}

export default Services;
