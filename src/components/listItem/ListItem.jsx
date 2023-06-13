import { PlayArrowOutlined } from "@material-ui/icons";
import "./listitem.scss";
import { useNavigate } from "react-router-dom";

function ListItem({ name, game, image, path }) {
  const storageUser = localStorage.getItem("userId");
  const navigate = useNavigate();

  return (
    <div className="listItem">
      <div className={image}>
        <div className="image-overlay"></div>
      </div>
      <div className="itemInfo">
        <div className="rules">
          <span className="game">IGRA</span>
          <span className="limit">18+</span>
        </div>
        <div className="items">
          <div className="name">{name}</div>
        </div>
        <div className="desc">{game}</div>
        <button className="play">
          <PlayArrowOutlined className="icon" />
          {storageUser !== null ? (
            <span onClick={() => navigate(path)}>Igraj</span>
          ) : (
            <span onClick={() => navigate("/login")}>Igraj</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default ListItem;
