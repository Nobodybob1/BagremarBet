import "./app.scss";
import Lucky6 from "./pages/game1/Lucky6";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./register.scss";

// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Welcome to CORS server 😁");
// });
// app.get("/cors", (req, res) => {
//   res.send("This has CORS enabled 🎈");
// });
// app.listen(8080, () => {
//   console.log("listening on port 8080");
// });
// app.get("/cors", (req, res) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   res.send({ msg: "This has CORS enabled 🎈" });
// });

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/lucky6" element={<Lucky6 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
