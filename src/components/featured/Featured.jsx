import { InfoOutlined, PlayArrowOutlined } from "@material-ui/icons";
import "./featured.scss";
import main from "../featured/main.jpg";

function Featured() {
  return (
    <div className="featured">
      <img className="main" src={main} alt="" />
      <div className="info">
        <img src="https://tinyurl.com/bagremar" alt="logo" />
        <span className="desc">
          Bagremar Bet je mesto gde se susreću strastveni ljubitelji sporta i
          klađenja. Sa širokim izborom sportskih događaja i kvotama, naša
          kladionica nudi nezaboravno iskustvo i uzbuđenje za sve koji su
          spremni da se pridruže akciji. Naša brza i jednostavna platforma za
          klađenje omogućava igračima da se brzo i lako kladite na svoje
          omiljene brojeve i kerove.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowOutlined className="icon" />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
