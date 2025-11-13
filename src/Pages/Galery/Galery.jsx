import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./Style.scss";
import axios from 'axios';
import HeroSec from '../../Component/HeroSec/HeroSec';

function Galery() {
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0); // yüklənmiş şəkillərin sayı
  const BASE_URL = "https://admin.duzdagmualice.az/api/media";

  useEffect(() => {
    if (!type) return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const endpoint = `${BASE_URL}/${type === "photos" ? "images" : "videos"}`;
        const res = await axios.get(endpoint);
        const result = res.data.data || res.data || [];
        setData(result);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

  // Hər bir şəkil yüklənəndə çağırılır
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <section id="gallery">
      <HeroSec title={"Qalereya"} />
      <div className="gallery-container">
        <div className="head-text">
          <h2>{type === "videos" ? "Videolar " : "Şəkillər "}</h2>
          <p>
            {type === "videos"
              ? "Buradan Düz Dağı müalicəsi prosesini, texnikaları və xəstələrimizin təcrübələrini videolar vasitəsilə izləyə bilərsiniz."
              : "Duz Dağı Müalicə Mərkəzinin iç məkanları rahatlıq və sakitliyi ilə seçilir. Burada hər detal ziyarətçilərin sağlamlığı və rahat istirahəti üçün düşünülüb."}
          </p>
        </div>

        {loading ? (
          <p className="loading">Yüklənir...</p>
        ) : (
          <div className="media-container container-fluid gx-0 gx-sm-3 gy-0 row d-flex justify-content-between">
            {type === "photos" &&
              data.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
                  <img
                    src={`https://admin.duzdagmualice.az/${item.filename}`}
                    alt="gallery"
                    className={`media-item ${imagesLoaded >= data.length ? "loaded" : "loading"}`}
                    onLoad={handleImageLoad} // şəkil yüklənəndə çağırılır
                  />
                  {imagesLoaded < data.length && <div className="skeleton"></div>} {/* skeleton */}
                </div>
              ))}

            {type === "videos" &&
              data.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
                  <video
                    controls
                    className="media-item loaded"
                    src={`https://admin.duzdagmualice.az/${item.filename}`}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Galery;
