import {
  AccountCircle,
  MonetizationOn,
  Notifications,
} from "@material-ui/icons";
import "./navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const storageUser = localStorage.getItem("test");
  console.log(storageUser);

  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://cdn.discordapp.com/attachments/1095343493142032498/1103333609634549851/logo-mali2.png"
            alt="react"
          />
          <span>Dogs</span>
          <span>Lucky 6</span>
        </div>
        {storageUser !== null ? (
          <div className="right">
            <MonetizationOn className="icons" />
            <span>12345</span>
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
            <div className="loginbtn">LOGIN</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
