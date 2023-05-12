import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import "./register.scss";
import { Navigate, useNavigate } from "react-router-dom";
import SideImage from "../../components/sideImage/SideImage";
import { ArrowBack } from "@material-ui/icons";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // setErrorMessage("");
    if (watch("password") === watch("confirmpwd")) {
      localStorage.setItem("test", "test");
      navigate("/");
    } else {
      setErrorMessage("yes");
      console.log(errorMessage);
    }
  };
  // console.log(watch("username"));

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <section className="registerPage">
      <div className="register">
        <div className="wrapper">
          <div className="arrowBack" onClick={handleHomePage}>
            <ArrowBack className="icon" />
          </div>
          <div className="flex">
            <div className="registerName">NAPRAVITE NALOG</div>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>
                Korisnicko Ime <span>*</span>
              </label>
              <input
                type="text"
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Username too short",
                  },
                })}
                placeholder="Unesite Vase Korisnicko Ime"
              />
              <label>
                Lozinka <span>*</span>
              </label>
              <input
                type="text"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Password too short",
                  },
                })}
                placeholder="Unesite Vasu Lozinku"
              />
              <label>
                Ponovite Lozinku <span>*</span>
              </label>
              <input
                type="text"
                {...register("confirmpwd", {
                  required: true,
                })}
                placeholder="Unesite Vasu Lozinku Ponovo"
              />
              {errors.username?.type === "required" && (
                <p>Username is required</p>
              )}
              {errors.password?.type === "required" && (
                <p>Password is required</p>
              )}
              {errors.password?.message && <p>{errors.password?.message}</p>}
              {errors.username?.message && <p>{errors.username?.message}</p>}
              {watch("password") !== watch("confirmpwd") && (
                  <p>Passwords do not match</p>
                ) &&
                errorMessage === "yes"}

              <div className="wrapCenter">
                <button className="btn">Napravite Nalog</button>
              </div>
              <div className="account">
                Imate nalog?
                <span onClick={handleLogin}> Prijavite se!</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SideImage register={"REGISTRACIJA"} />
    </section>
  );
};

export default Register;
