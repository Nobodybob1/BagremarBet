import {
  AccountCircle,
  MonetizationOn,
  Notifications,
} from "@material-ui/icons";
import "./navbar.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const storageUser = localStorage.getItem("userId");
  console.log(storageUser);

  const [isScrolled, setIsScrolled] = useState(false);
  const [balance, setBalance] = useState("-");

  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:3005/api/balance?userId=${storageUser}`
    );
    setBalance(res.data.balance);
  }, [balance]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  const location = window.location;
  const handleLogout = async (e) => {
    localStorage.removeItem("test");
    location.reload();
  };

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleHomepage = () => {
    navigate("/");
  };
  const handleLucky6 = () => {
    navigate("/lucky6");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://cdn.discordapp.com/attachments/1095343493142032498/1103333609634549851/logo-mali2.png"
            alt="react"
            onClick={handleHomepage}
          />
          {storageUser !== null ? (
            <>
              <span>Dogs</span>
              <span onClick={handleLucky6}>Lucky 6</span>
            </>
          ) : (
            <>
              <span onClick={handleLogin}>Dogs</span>
              <span onClick={handleLogin}>Lucky 6</span>
            </>
          )}
        </div>
        {storageUser !== null ? (
          <div className="right">
            <MonetizationOn className="icons" />
            <span>{balance}</span>
            <Notifications className="icon" />
            <div className="profile">
              <AccountCircle className="icon" />
              <div className="options">
                <span>Settings</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="registerbtn" onClick={handleRegister}>
              REGISTER
            </div>
            <div className="loginbtn" onClick={handleLogin}>
              LOGIN
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
