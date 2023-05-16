import React from "react";
import "./sideimage.scss";
import { useNavigate } from "react-router-dom";

function SideImage({ register, imageLink }) {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="sideItem">
      <div
        className="sideImage"
        style={{ backgroundImage: `url(${imageLink})` }}
      >
        <div className="image-overlay">
          <div className="image" onClick={handleHomePage}>
            <img src="https://media.discordapp.net/attachments/1095343493142032498/1098576431849672776/Logo.png?width=1440&height=360" />
          </div>
          <div className="descSite">
            Bagremar Bet je mesto gde se susreću strastveni ljubitelji sporta i
            klađenja. Sa širokim izborom sportskih događaja i kvotama, naša
            kladionica nudi nezaboravno iskustvo i uzbuđenje za sve koji su
            spremni da se pridruže akciji. Naša brza i jednostavna platforma za
            klađenje omogućava igračima da se brzo i lako kladite na svoje
            omiljene brojeve i kerove.
          </div>
          <div className="sideBottom">
            <div className="pageName">{register}</div>
            <div className="icon">18+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideImage;
