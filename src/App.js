import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./register.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

    //<div className="App">
    // <Register />
    //</div>
  );
};

export default App;
