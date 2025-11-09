import React from 'react';
import "./Style.scss";
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import HomeContact from '../../Component/HomeContact/HomeContact';


function Home() {
  return (
    <div>
      <HomeAbout />
      <HomeContact/>
    </div>
  );
}

export default Home;
