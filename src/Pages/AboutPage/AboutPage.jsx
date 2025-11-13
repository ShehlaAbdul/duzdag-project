import React from "react";
import "./Style.scss";
import HeroSec from "../../Component/HeroSec/HeroSec";
import Advantages from "../../Component/Advantages/Advantages";
import OurMission from "../../Component/OurMission/OurMission";
import { Helmet } from "react-helmet-async";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Haqqımızda | Duzdağ Müalicə Mərkəzi</title>
        <meta />
      </Helmet>
      <HeroSec title={"Haqqımızda"} />
      <Advantages />
      <OurMission />
    </>
  );
}

export default AboutPage;
