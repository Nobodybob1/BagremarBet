import React from "react";
import { useForm } from "react-hook-form";
import "./register.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
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
              {...register("username")}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password")}
              placeholder="password"
            />
            <input
              type="text"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email?.type === "required" && "Email is required"}

            <button className="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
