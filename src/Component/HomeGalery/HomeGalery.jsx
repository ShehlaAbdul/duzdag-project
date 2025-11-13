import React, { useEffect, useState } from 'react';
import "./Style.scss";
import HeadTitle from '../HeadTitle/HeadTitle';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

// import  from 'swiper';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

function HomeGalery() {
    const [gallery, setGallery] = useState([]);

     useEffect(() => {
       axios
         .get("https://admin.duzdagmualice.az/api/media/images")
         .then((res) => {
           setGallery(res.data.data || []);
         })
         .catch((err) => console.error("Xəta:", err));
     }, []);
    
  return (
    <section id="home-galery">
      <div className="home-galery continer-fluid g-0">
        <div className="head-side d-flex  align-items-center row ">
          <div className="head-text d-flex flex-column col-12 col-md-7 ">
            <div>
              {" "}
              <HeadTitle title={"Qalereya"} />
            </div>
            <h1>Duzdağdan Görüntülər</h1>
            <p>
              Təbii duz mağaralarının, müalicə otaqlarının və sakit istirahət
              məkanlarının şəklində Duzdağın şəfa gücünü hiss edin.
            </p>
          </div>
          <Link
            to={"gallery/photos"}
            className="d-none d-md-flex justify-content-end col-5 "
          >
            <ReadMoreBtn title={"Hamısını gör"} />
          </Link>
        </div>
        <div className="galery">
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {gallery.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="img">
                  <img
                    src={`https://admin.duzdagmualice.az/${photo.filename}`}
                    className="rounded-4"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" d-none d-md-flex gap-3 align-items-center justify-content-center mt-4">
            <div className="chevr">
              {" "}
              <HiMiniArrowLongLeft className="swiper-prev" size={26}  />
            </div>
            <div className="chevr">
              <HiMiniArrowLongRight className="swiper-next" size={26} />
            </div>
          </div>
          <div className=" d-flex d-md-none justify-content-center mt-3">
            <ReadMoreBtn title={"Hamısına bax"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeGalery;
