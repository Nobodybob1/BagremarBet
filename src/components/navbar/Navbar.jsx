import { MonetizationOn, Notifications } from "@material-ui/icons";
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react"
          />
          <span>Homepage</span>
          <span>Games</span>
          <span>Dogs</span>
          <span>Lucky 6</span>
        </div>
        {storageUser !== null ? (
          <div className="right">
            <MonetizationOn className="icon" />
            <div>12345</div>
            <Notifications className="icon" />
            <div className="profile">
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                alt="react"
              />
              <div className="options">
                <span>Settings</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="loginBtn">LOGIN</div>
            <div className="registerBtn" onClick={handleRegister}>
              REGISTER
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
