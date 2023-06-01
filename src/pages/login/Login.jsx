import React from "react";
import { useForm } from "react-hook-form";
import "./login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import SideImage from "../../components/sideImage/SideImage";
import { ArrowBack } from "@material-ui/icons";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res1 = await axios.get(
        `http://localhost:3005/api/get_user_by_credentials?username=${
          watch().username
        }&password=${watch().password}`
      );
      console.log(res1);
      localStorage.setItem("userId", res1.data.id);
      navigate("/");
    } catch {
      console.log(`wrong credentials`);
    }
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
                type="password"
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
      <SideImage
        register={"ULOGUJTE SE"}
        imageLink={
          "https://i1.wp.com/hechingerreport.org/wp-content/uploads/2018/04/Jennifer-Heller-Buckley-PHOTO1.jpg?ssl=1"
        }
      />
    </section>
  );
};

export default Login;
