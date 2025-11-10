import React from "react";
import "./Style.scss";
import HeadTitle from "../HeadTitle/HeadTitle";
import { useForm } from "react-hook-form";
import Overlay from "../../assets/images/contact-overlay.webp";



function HomeContact() {
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      alert("Form uğurla göndərildi!");
      reset();
  };
  
  return (
    <section id="home-contact">
      <div className="contact container-fluid g-0 ">
        <div className="contact-container px-3">
          <div className="contact-form d-flex flex-column align-items-center gap-2">
            <HeadTitle title={"Əlaqə"} />
            <h2>Sağlamlığınızı Duzdağda bərpa edin</h2>
            <p>
              Müalicə seansına və ya qalmağa rezervasiya etmək üçün formu
              doldurun komandamız sizinlə tezliklə əlaqə saxlayacaq.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form px-4 py-5 bg-light mx-auto "
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  {...register("firstName", { required: "Ad vacibdir" })}
                  className="form-control"
                  placeholder="Adınızı daxil edin"
                />
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName.message}</p>
                )}
              </div>
              <div className="col-md-6">
                <input
                  {...register("lastName", { required: "Soyad vacibdir" })}
                  className="form-control"
                  placeholder="Soyadınızı daxil edin"
                />
                {errors.lastName && (
                  <p className="text-danger">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
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
                <p className="text-danger">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
