import {
  AccountCircle,
  MonetizationOn,
  Notifications,
} from "@material-ui/icons";
import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../modal/Modal";
import DOMPurify from "dompurify";

const Navbar = () => {
  const storageUser = localStorage.getItem("userId");
  console.log(storageUser);

  const [isScrolled, setIsScrolled] = useState(false);
  const [balance, setBalance] = useState("-");
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationText, setNotificationText] = useState("");
  const refBalance = useRef(balance);
  const refNotifications = useRef(notifications);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <button className="exit" onClick={handleClose}>
      Zatvori
    </button>
  );

  useEffect(() => {
    refBalance.current = balance;
    refNotifications.current = notifications;
  });

  useEffect(async () => {
    if (storageUser !== null) {
      const res = await axios.get(
        `http://localhost:3005/api/balance?userId=${storageUser}`
      );
      setBalance(res.data.balance);
    }
    const interval = setInterval(async () => {
      if (storageUser !== null) {
        const res = await axios.get(
          `http://localhost:3005/api/balance?userId=${storageUser}`
        );
        if (res.data.balance !== refBalance.current && balance !== "-") {
          handleNewNotifications();
          let result = refBalance.current - res.data.balance;
          console.log(result);
          let msg = "";
          if (result > 0) {
            msg = `Vas GUBITAK iznosi: ${result}`;
          } else {
            result = -result;
            msg = `Vas DOBITAK iznosi: ${result}`;
          }
          setBalance(res.data.balance);
          if (refNotifications.current.length === 5) {
            // Vas GUBITAK iznosi:
            // Vas DOBITAK iznosi:
            setNotifications([
              refNotifications.current[1],
              refNotifications.current[2],
              refNotifications.current[3],
              refNotifications.current[4],
              msg,
            ]);
          } else {
            setNotifications([...refNotifications.current, msg]);
          }
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [balance]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  const location = window.location;
  const handleLogout = async (e) => {
    localStorage.removeItem("userId");
    if (location !== "http://localhost:3000/") {
      navigate("/");
    } else {
      location.reload();
    }
  };

  const navigate = useNavigate();
  const handleNavigate = (suffix) => {
    navigate("/" + suffix);
  };

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
    location.reload();
  };

  const handleNewNotifications = () => {
    const notifications = document.querySelector(".notification");
    if (notifications) {
      notifications.classList.add("bell");
    }
  };

  const sanitizer = DOMPurify.sanitize;
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizer(notificationText) }}
      ></div>
    </Modal>
  );

  const handleCheckNotifications = () => {
    const nots = document.querySelector(".notification");
    let text = "";
    for (let i = 0; i < notifications.length; i++) {
      text += notifications[i];
      if (i !== notifications.length - 1) {
        text += "<div></div>";
      }
    }
    setNotificationText(text);
    if (nots) {
      nots.classList.remove("bell");
      console.log(notifications);
      handleOpen();
    }
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
              <span
                onClick={() => {
                  navigate("/dogs");
                  location.reload();
                }}
              >
                Trke Pasa
              </span>
              <span onClick={handleLucky6}>Lucky 6</span>
            </>
          ) : (
            <>
              <span onClick={() => navigate(`/login`)}>Trke Pasa</span>
              <span onClick={() => handleNavigate("login")}>Lucky 6</span>
            </>
          )}
        </div>
        {storageUser !== null ? (
          <div className="right">
            <MonetizationOn className="icons" />
            <span>{balance}</span>
            <Notifications
              className="icon notification"
              onClick={handleCheckNotifications}
            />
            {showModal && modal}
            <div className="profile">
              <AccountCircle className="icon" />
              <div className="options">
                <span>Profil</span>
                <span onClick={handleLogout}>Izloguj se</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="right">
            <div className="registerbtn" onClick={handleRegister}>
              REGISTRUJ SE
            </div>
            <div className="loginbtn" onClick={handleLogin}>
              ULOGUJ SE
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
