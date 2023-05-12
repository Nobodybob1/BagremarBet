import React from "react";
import { useForm } from "react-hook-form";
import "./login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import SideImage from "../../components/sideImage/SideImage";
import { ArrowBack } from "@material-ui/icons";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("userId", "2");
    navigate("/");
  };
  // console.log(watch("username"));

  const handleRegister = () => {
    navigate("/register");
  };

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <section className="loginPage">
      <div className="loginPageBox">
        <div className="wrapper">
          <div className="arrowBack" onClick={handleHomePage}>
            <ArrowBack className="icon" />
          </div>
          <div className="flex">
            <div className="loginName">ULOGUJTE SE</div>
            <form
              id="form"
              className="flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>
                Korisnicko Ime <span>*</span>
              </label>
              <input
                type="text"
                {...register("username")}
                placeholder="Unesite Vase Korisnicko Ime"
              />
              <label>
                Lozinka <span> *</span>
              </label>
              <input
                type="text"
                {...register("password")}
                placeholder="Unesite Vasu Lozinku"
              />
              <div className="wrapCenter">
                <button className="btn">Ulogujte Se</button>
              </div>
              <div className="account">
                Nemate nalog?{" "}
                <span onClick={handleRegister}>Registrujte se!</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SideImage register={"ULOGUJTE SE"} />
    </section>
  );
};

export default Login;
