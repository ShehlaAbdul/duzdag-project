import React from 'react';
import "./Style.scss";
import HeroSec from '../../Component/HeroSec/HeroSec';
import OurServices from '../../Component/OurServices/OurServices';
import { Helmet } from 'react-helmet-async';


function Services() {
  return (
    <>
      <Helmet>
        <title>Xidmətlər | Əsas Səhifə</title>
      </Helmet>
          <HeroSec title={"Xidmətlər"} />
          <OurServices/>
    </>
  );
}

export default Services;
