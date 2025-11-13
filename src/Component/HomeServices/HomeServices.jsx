import React, { useState } from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Card1 from "../../assets/images/main_img.webp";
import Card2 from "../../assets/images/main_img2.webp";
import Card3 from "../../assets/images/main_img3.webp";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import { Link } from "react-router-dom";
import Vector from "../../assets/images/vector.png"

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
      text: "Fizioterapiya bədən funksiyalarını bərpa edir...",
      img: Card2,
    },
    {
      id: 3,
      title: "03 İNHALYASİYA PROSEDURLARI",
      text: "İnhalyasiya nəfəs yollarını təmizləmək üçün...",
      img: Card3,
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
        <div className="content-side    ">
          {/* SOL TƏRƏF – TABLAR */}
          <div className="tabs">
                      {data
                          .filter(
                              (item, index) =>
                                  index === active || index === (active + 1) % data.length
                          )
                          .map((item) => {
                              const realIndex = data.indexOf(item);
                              return (
                                <div
                                  key={item.id}
                                  className={`tab ${
                                    active === realIndex ? "active" : ""
                                  }`}
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
              {/* <div className="img-badge ">
                <h4 className="">{data[active].title}</h4>
                <img src={Vector} alt="" />
              </div> */}
            </div>
            <div className="text-side">
              {/* <h3>{data[active].title}</h3> */}
              <p>{data[active].text}</p>
              <Link to={"services"}>
                <ReadMoreBtn title={"Bütün Xidmətlər"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
