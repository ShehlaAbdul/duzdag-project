import React from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import AboutImg from "../../assets/images/about-img.jpg";


function HomeAbout() {
  return (
    <section id="home-about">
      <div className="container-fluid  p-0">
        <div className="row p-0 g-0">
          <div className="text-side col d-flex flex-column gap-3">
            <div className="about-title">
              <HeadTitle title={"Haqqımızda"} />
            </div>
            <h1>Sağlamlığınıza Dəyər Qatan Təcrübə</h1>
            <p>
              Duz Dağ Müalicə Mərkəzi, Naxçıvanın təbii sərvəti olan Duz Dağ
              mağarasında yerləşən unikal sağlamlıq məkanıdır. 1979-cu ildən
              fəaliyyət göstərən mərkəz, təbiətin şəfalı gücünü müasir tibbi
              yanaşmalarla birləşdirərək, insanlara sağlamlıq və rahatlıq bəxş
              edir.
            </p>
            <p>
              Mərkəzin əsas məqsədi, təbii duz mikroiqliminin faydalı təsiri
              vasitəsilə nəfəs sistemi və allergik xəstəliklərin müalicəsini
              təmin etməkdir. Burada yaradılmış xüsusi şərait tənəffüs yollarını
              təmizləyir, immuniteti gücləndirir və ümumi orqanizm sağlamlığını
              bərpa edir.
            </p>
            <ReadMoreBtn title={"Daha Ətraflı"} />
          </div>
          <div className="about-img border col">
            <div className="img">
              <img src={AboutImg} alt="" />
            </div>
            {/* <div className="text">
              <h5>Əsas dəyərlərimiz</h5>
              <ul className="d-flex flex-column p-0">
                <li>Təbiətin şəfasına inanırıq</li>
                <li>İnsan mərkəzli yanaşma</li>
                <li>Etibar və keyfiyyət</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
