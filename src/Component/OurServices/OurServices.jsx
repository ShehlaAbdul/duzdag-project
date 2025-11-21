import React from "react";
import "./Style.scss";
import MainImg1 from "../../assets/images/main_img.webp";
import MainImg2 from "../../assets/images/main_img2.webp";
import MainImg3 from "../../assets/images/main_img3.webp";
import SecondImg from "../../assets/images/second_img.webp";
function OurServices() {
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
    <section id="our-services">
      <div className="our-services">
        <div className="head-text">
          <h2>Xidmətlərimiz</h2>
          <p>
            Tənəffüs yolları xəstəliklərinin speleoterapiya üsulu ilə müalicəsi
            Duzdağ Müalicə Mərkəzində təbii duz mağaralarının unikal mikroiqlim
            şəraitində həyata keçirilir. Bu şərait tənəffüs yollarının
            bərpasına, allergik və xroniki xəstəliklərin azaldılmasına, həmçinin
            immun sisteminin güclənməsinə kömək edir. Speleoterapiya dünyada
            tanınmış, dərmansız və tamamilə təbii müalicə metodudur.
          </p>
        </div>
        <div className="container-fluid g-0">
          <div className="services-cards row g-0 ">
            {services.map((service) => (
              <div key={service.id} className="services-card  ">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
