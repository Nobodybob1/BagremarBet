import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listItem/ListItem";
import { useRef } from "react";

function List() {
  const listRef = useRef();

  const handleClick = (direction) => {
    let listItemWidth = 230;
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (distance % listItemWidth !== 0 || distance % listItemWidth !== -0) {
      // prati trajanje animacije
      return;
    }
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${
        listItemWidth + distance
      }px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${
        -listItemWidth + distance
      }px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Games</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
