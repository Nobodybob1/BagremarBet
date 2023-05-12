import "./app.scss";
import Lucky6 from "./pages/game1/Lucky6";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./register.scss";

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
