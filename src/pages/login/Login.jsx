import React from "react";
import { useForm } from "react-hook-form";
import "./login.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("test", "test");
    navigate("/");
  };
  // console.log(watch("username"));

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section className="loginPage">
      <div className="loginPageBox">
        <div className="col-1">
          <h2>Login</h2>
          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password")}
              placeholder="password"
            />
            <button className="btn">Log in</button>
            <div className="account">
              Dont have an account?{" "}
              <span onClick={handleRegister}>Register now!</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
