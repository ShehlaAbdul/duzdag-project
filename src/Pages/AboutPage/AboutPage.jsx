import React from 'react';
import "./Style.scss";
import HeroSec from '../../Component/HeroSec/HeroSec';
import Advantages from '../../Component/Advantages/Advantages';
import OurMission from '../../Component/OurMission/OurMission';

function AboutPage() {
  return (
    <>
      <HeroSec title={"Haqqımızda"}/>
      <Advantages />
      <OurMission/>
    </>
  );
}

export default AboutPage;
