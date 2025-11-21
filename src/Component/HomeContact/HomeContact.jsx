import React from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import { useForm } from "react-hook-form";
import Overlay from "../../assets/images/contact-overlay.webp";
import Swal from "sweetalert2";
import axios from "axios";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";



function HomeContact() {
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
    <section id="home-contact">
      <div className="contact d-none container-fluid g-0 ">
        <div className="contact-form mx-auto">
          <div className="contact-head text-center">
            <HeadTitle title={"Əlaqə"} />
            <h2>Sağlamlığınızı Duzdağda bərpa edin</h2>
            <p>
              Müalicə seansına və ya qalmağa rezervasiya etmək üçün formu
              doldurun komandamız sizinlə tezliklə əlaqə saxlayacaq.
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
                  <p className="text-danger small">{errors.lastName.message}</p>
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
        <div className="background"></div>
      </div>

      <div className="contact-form mx-auto">
        <div className="contact-head text-center">
          <HeadTitle title={"Əlaqə"} />
          <h2>Sağlamlığınızı Duzdağda bərpa edin</h2>
          <p>
            Müalicə seansına və ya qalmağa rezervasiya etmək üçün formu doldurun
            komandamız sizinlə tezliklə əlaqə saxlayacaq.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container  px-4  bg-light "
        >
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                {...register("firstName", { required: "Ad vacibdir" })}
                className="form-control"
                placeholder="Adınızı daxil edin"
              />
              {errors.firstName && (
                <p className="text-danger small">{errors.firstName.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <input
                {...register("lastName", { required: "Soyad vacibdir" })}
                className="form-control"
                placeholder="Soyadınızı daxil edin"
              />
              {errors.lastName && (
                <p className="text-danger small">{errors.lastName.message}</p>
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

        <button className="reservation">Rezervasiya edin </button>
        </form>
      </div>
      <div className="overlay">
            <img src={Overlay} alt="" />
      </div>
    </section>
  );
}

export default HomeContact;
