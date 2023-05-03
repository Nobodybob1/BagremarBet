import {
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useState } from "react";

function ListItem({ index, name }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1272556/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1272556/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
        alt=""
        className="frame"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="items">
              <PlayArrow className="icon" />
              <div className="name">{name}</div>
              <span className="limit">+18</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              eum? Eaque corporis quisquam praesentium ratione explicabo.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
