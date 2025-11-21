import React from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import AboutImg from "../../assets/images/about-img.jpg";
import { GiCheckMark } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";



function HomeAbout() {
  return (
    <section id="home-about">
      <div className="home-about container-fluid g-0">
        <div className="row p-0 g-0">
          <div className="text-side col-12 col-lg-6 d-flex flex-column  m-0  ">
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
            <Link to={"about"}>
              <ReadMoreBtn title={"Daha Ətraflı"} />
            </Link>
          </div>
          <div className="img-side  col-12 col-lg-6">
            <div className="img">
              <img src={AboutImg} alt="" className="" />
            <div className="text">
              <div className="text-content">
                <h5>Əsas dəyərlərimiz</h5>
                <ul className="d-flex flex-column m-0">
                  <li>
                    {/* <GiCheckMark /> */}
                    <FaCheck />

                    <span>Təbiətin şəfasına inanırıq</span>
                  </li>
                  <li>
                    {/* <GiCheckMark /> */}
                    <FaCheck />
                    <span>İnsan mərkəzli yanaşma</span>
                    
                  </li>
                  <li>
                    {/* <GiCheckMark /> */}
                    <FaCheck />
                    <span>Etibar və keyfiyyət</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
