import React from "react";
import "./Style.scss";
import HeroSec from "../../Component/HeroSec/HeroSec";
import { useForm } from "react-hook-form";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
try {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailAdress: data.email,
      phoneNumber: data.phone,
      inputMessage: data.message,
    };

    await axios.post("https://admin.duzdagmualice.az/api/contacts", payload, {
      headers: { "Content-Type": "application/json" },
    });

    Swal.fire({
      icon: "success",
      title: "Uğurlu!",
      text: "Mesajınız göndərildi, ən qısa zamanda sizinlə əlaqə saxlanılacaq.",
      confirmButtonText: "Bağla",
    });

    reset();
  } catch (error) {
    console.error("Xəta cavabı:", error.response?.data || error);
    Swal.fire({
      icon: "error",
      title: "Xəta!",
      text: "Mesaj göndərilərkən problem yarandı. Zəhmət olmasa yenidən cəhd edin.",
      confirmButtonText: "Bağla",
    });
  }
};

  return (
    <>
      <Helmet>
        <title>Əlaqə | Duzdağ Müalicə Mərkəzi</title>
        <meta />
      </Helmet>
      <HeroSec title={"Əlaqə"} />
      <section id="contact-page" className="container-fluid">
        <div className="contact-page row g-0">
          <div className="form-side col-12 g-0 col-lg-7">
            <div className="head-text">
              <h1>Bizimlə Əlaqə Saxlayın</h1>
              <p>
                Sualınız, rezervasiya istəyi və ya müalicə proqramlarımızla
                maraqlanırsınızsa, bizimlə rahatlıqla əlaqə saxlaya bilərsiniz.
                Komandamız ən qısa zamanda cavab verəcək.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form px-4  bg-light "
            >
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    {...register("firstName", { required: "Ad vacibdir" })}
                    className="form-control"
                    placeholder="Adınızı daxil edin"
                  />
                  {errors.firstName && (
                    <p className="text-danger small">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    {...register("lastName", { required: "Soyad vacibdir" })}
                    className="form-control"
                    placeholder="Soyadınızı daxil edin"
                  />
                  {errors.lastName && (
                    <p className="text-danger small">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input
                    {...register("email", {
                      required: "Email vacibdir",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email formatı yanlışdır",
                      },
                    })}
                    className="form-control"
                    placeholder="Email daxil edin"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    {...register("phone", {
                      required: "Əlaqə nömrəsi vacibdir",
                      pattern: {
                        value: /^[0-9+() -]{7,15}$/,
                        message: "Düzgün nömrə formatı daxil edin",
                      },
                    })}
                    className="form-control"
                    placeholder="Məs: +994 60 330 55 55"
                  />
                  {errors.phone && (
                    <p className="text-danger">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  {...register("message", { required: "Mesaj vacibdir" })}
                  className="form-control"
                  rows="4"
                  placeholder="Mesajınızı yazın..."
                />
                {errors.message && (
                  <p className="text-danger small">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Rezervasiya edin
              </button>
            </form>
          </div>
          <div className="title-side col-12 col-lg-5 d-flex flex-column justify-content-between align-items-md-end gap-3 p-0">
            <div className="loc d-flex flex-column align-items-center p-2 gap-2">
              <div className="d-flex flex-column align-items-center">
                <GrLocation size={24} className="mb-1" />
                <span>Ünvan</span>
              </div>
              <p className="w-75 text-center">
                Naxçıvan, Duzdağ dağ massivinin ətəyi
              </p>
            </div>
            <div
              id="mail"
              className="loc d-flex flex-column align-items-center p-2 "
            >
              <div className="d-flex flex-column align-items-center">
                <FiMail size={24} className="mb-1" />
                <span>Əməkdaşlıq üçün</span>
              </div>
              <p className="w-75 text-center">duzdagmmc@gmail.com</p>
            </div>
            <div className="loc d-flex flex-column align-items-center justify-content-center p-2 ">
              <div className="d-flex flex-column align-items-center">
                <FiPhone size={24} className="mb-1" />
                <span>Bizimlə Əlaqə</span>
              </div>
              <p className="w-75 text-center">(+994) 60 330 55 55</p>
            </div>
          </div>
        </div>
        <div className="map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5301.109497626237!2d45.31437887313866!3d39.2876970947301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401435a982f8726b%3A0x7d3e011dbf9d3e57!2zRHV6ZGHEnywgRTAwMiwgRHV6ZGHEn8SxIFlvbHUsIDY3MDA!5e0!3m2!1saz!2saz!4v1762809105112!5m2!1saz!2saz"
            height="100%"
            width={"100%"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
