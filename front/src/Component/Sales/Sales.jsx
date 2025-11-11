import React from 'react';
import "./Style.scss";
import Sale from "../../assets/icons/sale1.svg"
import Sale2 from "../../assets/icons/sale.svg";
import Sale3 from "../../assets/icons/sale3.svg";
import Sale4 from "../../assets/icons/sale4.svg";
import Sale5 from "../../assets/icons/sale4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {  Autoplay } from "swiper/modules";


function Sales() {
    const sales = [
      {
        img: Sale,
        desc: "Yerli vətəndaşlar (12 yaşdan yuxarı)",
        sales: "22 AZN / ",
        time: "gün",
      },
      {
        img: Sale2,
        desc: "Yerli vətəndaşlar (12 yaşadək)",
        sales: "12 AZN /",
        time: " gün",
      },
      {
        img: Sale3,
        desc: "Xarici vətəndaşlar (12 yaşdan yuxarı)",
        sales: "34 AZN /",
        time: " gün",
      },
      {
        img: Sale4,
        desc: "Xarici vətəndaşlar (12 yaşadək)",
        sales: "17 AZN /",
        time: " gün",
      },
      {
        img: Sale5,
        desc: "Müharibə veteranları",
        sales: "50% güzəşt",
        // time: "güzəşt",
      },
    ];
  return (
    <section id="sales">
      <div className="sales container-fluid ">
        <div className="head-side pb-5">
          <h1>Qiymət Kateqoriyaları</h1>
          <p>
            Müalicə seanslarının qiymətləri və güzəştlər qruplar üzrə müəyyən
            edilmişdir. Özünüzə uyğun kateqoriyanı seçərək duz terapiyasından
            yararlanın.
          </p>
        </div>
        <div className="slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="brands-slider"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1048: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {[...sales, ...sales].map((sale, index) => (
              <SwiperSlide key={index}>
                <div className="sale-card">
                  <div className="card-img">
                    <img src={sale.img} alt="" />
                  </div>
                  <p className="sale-desc">{sale.desc}</p>
                  <div>
                    <span>Qiymət: </span>
                    <span className="sale">{sale.sales}</span>
                    <span>{sale.time}</span>
                  </div>
                </div>
                {/* <img src={sale.img} alt={`brand-${index}`} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Sales;
