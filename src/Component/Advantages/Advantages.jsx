import React from 'react';
import "./Style.scss";
import { PiDotOutlineFill } from "react-icons/pi";
import MainImg from "../../assets/images/advantages-main.webp";
import SecondImg from "../../assets/images/advantages-2.webp"

function Advantages() {
  return (
    <section id="advantages">
      <div className="advantages container-fluid g-0 row p-0 m-0">
        <div className="text-side col-12 col-xl-7  ">
          <div className="head-text">
            <h1>Sağlamlığınıza Dəyər Qatan Təcrübə</h1>
            <p>
              Dəniz səviyyəsindən 1100 metr hündürlükdə yerləşən Duzdağ Müalicə
              Mərkəzi 1979-cu ildən fəaliyyət göstərir. Mərkəzin yerləşdiyi
              Duzdağın yeraltı hissəsi labirint şəklindədir və ümumi uzunluğu 46
              kilometrdir. Girişdən 360 metr məsafədə, 110 metr dərinlikdə
              yerləşən bu unikal məkan təbii şəfalı mikroiqlimə malikdir.
            </p>
          </div>
          <div className="bottom-text d-none d-xl-block pt-5">
            <h3>Üstünlüklər:</h3>
            <ul className="m-0 p-0 ">
              <li className="d-flex align-items-center">
                <PiDotOutlineFill />
                İlin bütün fəsillərində havanın temperaturunun 18-20°C olması
              </li>
              <li>
                <PiDotOutlineFill />
                Horizontal yerləşmə və təbii havalandırma
              </li>
              <li>
                <PiDotOutlineFill />
                Mikrobların və allergenlərin yox dərəcəsində olması
              </li>
              <li>
                <PiDotOutlineFill />
                Rütubət və temperaturun daimi sabit qalması
              </li>
            </ul>
          </div>
        </div>
        <div className="img-side col-12 col-xl-5 ">
          <div className="main-img">
            <img src={MainImg} alt="" />
          </div>
          <div className="badge-box">
            <div className="box-container">
              <h4>45+</h4>
              <p>İldir fəaliyyət göstərir</p>
            </div>
          </div>
          <div className="second-img">
            <img src={SecondImg} alt="" />
          </div>
        </div>
        <div className="bottom-text d-block d-xl-none fs-md-3 pt-3">
          <h3>Üstünlüklər:</h3>
          <ul className="m-0 p-0 d-flex flex-column  ">
            <li>
              <div>
                <PiDotOutlineFill />
              </div>
              <p>
                İlin bütün fəsillərində havanın temperaturunun 18-20°C olması
              </p>
            </li>
            <li>
              <div>
                <PiDotOutlineFill />
              </div>
              <p> Horizontal yerləşmə və təbii havalandırma</p>
            </li>
            <li>
              <div>
                <PiDotOutlineFill />
              </div>
              <p>Mikrobların və allergenlərin yox dərəcəsində olması</p>
            </li>
            <li>
              <div>
                <PiDotOutlineFill />
              </div>
              <p>Rütubət və temperaturun daimi sabit qalması</p>
            </li>
          </ul>
        </div>
        <div className="environment col-12 pt-4">
          <h1>Müalicə Mühiti və Tibbi Şərait</h1>
          <p>
            Duzdağ Müalicə Mərkəzi öz unikal mikroiqlimi və müasir tibbi şəraiti
            ilə seçilir. Mərkəzdə ilin bütün fəsillərində havanın temperaturu
            18–20°C, nisbi rütubət 25–30% arasında dəyişir, atmosfer təzyiqi isə
            678 millimetr civə sütununa bərabərdir. Hər kubmetr havanın
            tərkibində 18–21 milliqram NaCl ionları mövcuddur. Bu şərait
            tənəffüs yollarının təmizlənməsinə, bərpasına və immun sisteminin
            güclənməsinə şərait yaradır. Duzdağ Müalicə Mərkəzi bronxial astma
            (infeksion-allergik və atopik formalar), astmatik komponentli
            xroniki bronxitin remissiya fazası, kəskin və xroniki bronxitlər,
            eləcə də allergik rinosinusopatiyalar, pollinoz, tonzillit və
            övrələr kimi xəstəliklərin müalicəsində yüksək nəticələr göstərir.
            Mərkəz Türkiyə, Rusiya, Almaniya və Macarıstan istehsalı olan müasir
            tibbi avadanlıqlarla (2012, 2018 və 2019-cu il modelləri) təchiz
            olunub. Bu avadanlıqlar vasitəsilə aparılan fizioterapiya və digər
            proseduralar beynəlxalq standartlara tam uyğun şəkildə həyata
            keçirilir. Müalicə prosesi ixtisaslı həkimlər və təcrübəli tibbi
            personalın nəzarəti altında aparılır. Hər bir pasiyent üçün fərdi
            müalicə planı hazırlanır və proseduraların effektivliyi daima
            diqqətdə saxlanılır.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
