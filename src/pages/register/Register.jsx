import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import "./register.scss";
import { Navigate, useNavigate } from "react-router-dom";

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

  return (
    <section className="registerPage">
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", {
                required: true,
                minLength: {
                  value: 4,
                  message: "Username too short",
                },
              })}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password", {
                required: true,
                minLength: {
                  value: 4,
                  message: "Password too short",
                },
              })}
              placeholder="password"
            />
            <input
              type="text"
              {...register("confirmpwd", {
                required: true,
              })}
              placeholder="confirm password"
            />
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
              placeholder="email"
            />
            {errors.username?.type === "required" && (
              <p>Username is required</p>
            )}
            {errors.password?.type === "required" && (
              <p>Password is required</p>
            )}
            {errors.email?.type === "required" && <p>Email is required</p>}
            {errors.password?.message && <p>{errors.password?.message}</p>}
            {errors.username?.message && <p>{errors.username?.message}</p>}
            {watch("password") !== watch("confirmpwd") && (
                <p>Passwords do not match</p>
              ) &&
              errorMessage === "yes"}

            <button className="btn">Sign Up</button>
            <div className="login">
              Already have an account?
              <span onClick={handleLogin}> Log in instead!</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
