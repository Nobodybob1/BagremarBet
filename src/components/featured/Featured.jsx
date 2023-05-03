import { InfoOutlined, PlayArrowOutlined } from "@material-ui/icons";
import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <img src="https://i.ytimg.com/vi/JbT1zyVz13Q/maxresdefault.jpg" alt="" />
      <div className="info">
        <img src="https://tinyurl.com/bagremar" alt="logo" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          doloribus magnam culpa deserunt, quod et, consequuntur odio in eveniet
          aliquam consectetur perspiciatis distinctio non? Doloribus maiores
          laborum sed error sapiente.
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
