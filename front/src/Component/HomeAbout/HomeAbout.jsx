import React from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import AboutImg from "../../assets/images/about-img.jpg";
import { GiCheckMark } from "react-icons/gi";


function HomeAbout() {
  return (
    <section id="home-about">
      <div className="home-about container-fluid g-0">
        <div className="row p-0 g-0">
          <div className="text-side col-12 col-lg-7 d-flex flex-column gap-2 gap-md-3">
            <div className="about-title">
              <HeadTitle title={"Haqqımızda"} />
            </div>
            <h1>Sağlamlığınıza Dəyər Qatan Təcrübə</h1>
            <p>
              Dəniz səviyyəsindən 1100 metr hündürlükdə yerləşən Duzdağ Müalicə
              Mərkəzi 1979-cu ildən fəaliyyət göstərir. Mərkəzin yerləşdiyi
              Duzdağın yeraltı hissəsi labirint şəklindədir və ümumi uzunluğu 46
              kilometrdir. Girişdən 360 metr məsafədə, 110 metr dərinlikdə
              yerləşən bu unikal məkan təbii şəfalı mikroiqlimə malikdir.
            </p>
            <p>
              Mərkəzin əsas məqsədi, təbii duz mikroiqliminin faydalı təsiri
              vasitəsilə nəfəs sistemi və allergik xəstəliklərin müalicəsini
              təmin etməkdir. Burada yaradılmış xüsusi şərait tənəffüs yollarını
              təmizləyir, immuniteti gücləndirir və ümumi orqanizm sağlamlığını
              bərpa edir.
            </p>
            <div>
              <ReadMoreBtn title={"Daha Ətraflı"} />
            </div>
          </div>
          <div className="img-side border col-12 col-lg-5">
            <div className="img">
              <img src={AboutImg} alt="" className="" />
            </div>
            <div className="text">
              <div className="text-content">
                <h5>Əsas dəyərlərimiz</h5>
                <ul className="d-flex flex-column p-0">
                  <li>
                    <GiCheckMark />
                    <span>Təbiətin şəfasına inanırıq</span>
                  </li>
                  <li>
                    <GiCheckMark />
                    <span>İnsan mərkəzli yanaşma</span>
                  </li>
                  <li>
                    <GiCheckMark />
                    <span>Etibar və keyfiyyət</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
