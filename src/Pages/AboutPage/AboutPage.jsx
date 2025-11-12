import React from 'react';
import "./Style.scss";
import HeroSec from '../../Component/HeroSec/HeroSec';
import Advantages from '../../Component/Advantages/Advantages';

function AboutPage() {
  return (
    <>
      <HeroSec title={"Haqqımızda"} />
      <Advantages/>
    </>
  );
}

export default AboutPage;
