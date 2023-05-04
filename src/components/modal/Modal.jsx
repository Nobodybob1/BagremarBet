import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="modal"></div>
      <div className="modalBox">
        <img
          src="https://cdn.discordapp.com/attachments/1095343493142032498/1103333609634549851/logo-mali2.png"
          alt="logo"
          className="logo"
        />
        <div className="text">
          {children}
          <div className="close">{actionBar}</div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default Modal;
