import React, { useState } from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import Card1 from "../../assets/images/main_img.webp";
import Card2 from "../../assets/images/main_img2.webp";
import Card3 from "../../assets/images/main_img3.webp";
import MainImg1 from "../../assets/images/main_img.webp";
import MainImg2 from "../../assets/images/main_img2.webp";
import MainImg3 from "../../assets/images/main_img3.webp";
import SecondImg from "../../assets/images/second_img.webp";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import { Link } from "react-router-dom";
import Vector from "../../assets/images/vector.png"
import OurServices from "../OurServices/OurServices";

function HomeServices() {
  const [active, setActive] = useState(0);

  const data = [
    {
      id: 1,
      title: "01 LABORATORİYA XİDMƏTİ",
      text: "Qanda şəkər və digər əsas göstəricilər dəqiq analiz olunur. Müalicə prosesi üçün düzgün diaqnozun qoyulmasına kömək edir. Nəticələr sürətli və etibarlıdır, həkimlərin qərar verməsini asanlaşdırır. Laboratoriya xidmətləri xəstələrin sağlamlığının izlənməsi üçün vacibdir.",
      img: Card1,
    },
    {
      id: 2,
      title: "02 FİZİOTERAPİYA PROSEDURLARI",
      text: "Müasir avadanlıqlarla həyata keçirilən fizioterapiya seansları bərpanı sürətləndirir. Ağrıları azaldır və hərəkət qabiliyyətini artırır. Müalicə proqramı fərdi olaraq hazırlanır. Fizioterapiya xəstələrin həyat keyfiyyətini yüksəldir.",
      img: Card2,
    },
    {
      id: 3,
      title: "03 İNHALYASİYA PROSEDURLARI",
      text: "Duz aerozolları tənəffüs yollarını təmizləyir və nəfəs almağı asanlaşdırır. Astma və bronxit kimi xəstəliklərin müalicəsində istifadə olunur. Müalicə sakitləşdirici və rahatlaşdırıcı təsir göstərir. İnhalyasiya prosedurları nəfəs yollarının sağlamlığı üçün effektivdir.",
      img: Card3,
    },
  ];
   const services = [
      {
        id: 1,
        main_img: MainImg1,
        second_img: SecondImg,
        title: "Laboratoriya xidməti",
        desc: "Qanda şəkər və əsas göstəricilər dəqiq analiz olunur. Müalicə prosesi üçün düzgün diaqnozun qoyulmasına kömək edir.",
      },
      {
        id: 2,
        main_img: MainImg2,
        second_img: SecondImg,
        title: "Fizioterapiya proseduraları",
        desc: "Müasir avadanlıqlarla həyata keçirilən seanslar bərpanı sürətləndirir və ağrıları azaldır.",
      },
      {
        id: 3,
        main_img: MainImg3,
        second_img: SecondImg,
        title: "İnhalyasiya proseduraları",
        desc: "Duz aerozolları tənəffüs yollarını təmizləyir, nəfəsin rahatlamasına və bərpaya kömək edir.",
      },
    ];
  return (
    <section id="home-services">
      <div className="home-services">
        <div className="head-side  d-flex flex-column">
          <div>
            <HeadTitle title={"Xidmətlər"} />
          </div>
          <h1>Xidmətlərimizlə Sağlamlığınızı Qoruyun</h1>
          <p>
            Duzdağ Müalicə Mərkəzində təbiətin şəfalı duz atmosferi ilə bronxial
            və tənəffüs xəstəliklərinin müalicəsi həyata keçirilir. Peşəkar
            həkim nəzarəti, fərdi yanaşma və rahat şəraitlə sağlam nəfəsinizi
            bərpa etməyə kömək edirik.
          </p>
        </div>
        <div className="content-side d-none d-lg-flex">
          {/* SOL TƏRƏF – TABLAR */}
          <div className="tabs">
            {data
              .filter(
                (item, index) =>
                  index === active ||
                  index === (active - 1 + data.length) % data.length
              )
              .map((item) => {
                const realIndex = data.indexOf(item);
                return (
                  <div
                    key={item.id}
                    className={`tab ${active === realIndex ? "active" : ""}`}
                    onClick={() => setActive(realIndex)}
                  >
                    <div className="d-flex align-items-center gap-4">
                      <span className="tab-number">
                        {item.id.toString().padStart(2, "0")}
                      </span>
                      <span className="tab-title">
                        {item.title.replace(/^\d+\s/, "")}
                      </span>
                    </div>
                    <div className="arrow">
                      <HiMiniArrowLongRight size={30} />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* SAĞ TƏRƏF – AKTİV BLOK */}
          <div className="content">
            <div className="image">
              <img src={data[active].img} alt={data[active].title} />
              <div className="img-badge ">
                <h4 className="">{data[active].title}</h4>
                <img src={Vector} alt="" className="vector2" />
                <img src={Vector} alt="" className="vector1" />
              </div>
            </div>
            <div className="text-side">
              {/* <h3>{data[active].title}</h3> */}
              <p>{data[active].text}</p>
              <Link to={"/services"}>
                <ReadMoreBtn title={"Bütün Xidmətlər"} />
              </Link>
            </div>
          </div>
        </div>

        <div className="services-cards d-flex d-lg-none">
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {services.map((service) => (
              <SwiperSlide>
                <div key={service.id} className="services-card col-4">
                  <div className="img">
                    <img
                      src={service.main_img}
                      alt="Main Service"
                      className="main-img"
                    />
                    <img
                      src={service.second_img}
                      alt="Main Service"
                      className="second-img"
                    />
                  </div>
                  <div className="card-desc">
                    <h3>{service.title}</h3>
                    <div class="hover-bar">
                      <div class="dot"></div>
                    </div>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className=" d-none d-md-flex gap-3 align-items-center justify-content-center mt-4">
            <div className="chevr">
              {" "}
              <HiMiniArrowLongLeft className="swiper-prev" size={26} />
            </div>
            <div className="chevr">
              <HiMiniArrowLongRight className="swiper-next" size={26} />
            </div>
          </div> */}
          {/* <div className=" d-flex d-md-none justify-content-center mt-3">
            <ReadMoreBtn title={"Hamısına bax"} />
          </div> */}
        </div>
        <div className=" d-flex justify-content-center" >
          <ReadMoreBtn title={"Bütün Xidmətlər"}></ReadMoreBtn>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
