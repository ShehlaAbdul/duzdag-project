import React from 'react';
import "./Style.scss";
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import HomeContact from '../../Component/HomeContact/HomeContact';
import HomeHero from '../../Component/HomeHeroSec/HomeHero';
import Sales from '../../Component/Sales/Sales';


function Home() {
  return (
    <div>
      <HomeHero/>
      <HomeAbout />
      <Sales/>
      <HomeContact/>
    </div>
  );
}

export default Home;
