import { InfoOutlined, PlayArrowOutlined } from "@material-ui/icons";
import "./featured.scss";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();

  const actionBar = (
    <button className="exit" onClick={handleClose}>
      Zatvori
    </button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Bagremar Bet je mesto gde se susreću strastveni ljubitelji sporta i
      klađenja. Sa širokim izborom sportskih događaja i kvotama, naša kladionica
      nudi nezaboravno iskustvo i uzbuđenje za sve koji su spremni da se
      pridruže akciji. Naša brza i jednostavna platforma za klađenje omogućava
      igračima da se brzo i lako klade na svoje omiljene brojeve i kerove.
    </Modal>
  );

  return (
    <div className="featured">
      <div className="main">
        <div className="image-overlay"></div>
      </div>
      <div className="info">
        <img src="https://tinyurl.com/bagremar" alt="logo" />
        <span className="desc">
          Bagremar Bet je mesto gde se susreću strastveni ljubitelji sporta i
          klađenja. Sa širokim izborom sportskih događaja i kvotama, naša
          kladionica nudi nezaboravno iskustvo i uzbuđenje za sve koji su
          spremni da se pridruže akciji. Naša brza i jednostavna platforma za
          klađenje...{" "}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowOutlined className="icon" />
            <span onClick={() => navigate("/addGame")}>Igraj</span>
          </button>
          <button className="more" onClick={handleClick}>
            <InfoOutlined />
            <span>Info</span>
          </button>
          {showModal && modal}
        </div>
      </div>
    </div>
  );
}

export default Featured;
