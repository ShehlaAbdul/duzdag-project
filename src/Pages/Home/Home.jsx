import React from 'react';
import "./Style.scss";
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import HomeContact from '../../Component/HomeContact/HomeContact';
import HomeHero from '../../Component/HomeHeroSec/HomeHero';
import Sales from '../../Component/Sales/Sales';
import { Helmet } from 'react-helmet-async';
import HomeGalery from '../../Component/HomeGalery/HomeGalery';
import HomeServices from '../../Component/HomeServices/HomeServices';


function Home() {
  return (
    <div className='home'>
      <Helmet>
        <title>Əsas Səhifə | Duzdağ Müalicə Mərkəzi</title>
        <meta />
      </Helmet>
      <HomeHero />
      <HomeAbout />
      <HomeServices/>
      <HomeGalery/>
      <Sales />
      <HomeContact />
    </div>
  );
}

export default Home;
