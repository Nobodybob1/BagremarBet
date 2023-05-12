import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./lucky6.scss";
import "../../components/navbar/navbar.scss";

function Lucky6() {
  return (
    <div className="lucky6">
      <Navbar />
      <div className="gameContainer">
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/7896590?color=333333"
          allowfullscreen=""
          width="1000"
          height="520"
        >
          <a href="https://deskimir.itch.io/test">Play test on itch.io</a>
        </iframe>
        <div className="gameDesc">
          <div className="imageGame">
            <div className="image-overlay"></div>
          </div>
          <div className="desc">
            <div className="gameName">Lucky6</div>
            <div className="gameText">
              Dobrodošli u Lucky 6 igru! Cilj je pogoditi svih 6 brojeva na
              tiketu kako biste osvojili. Kvota zavisi od rednog broja šeste
              izvučene kuglice s odabranim brojem. Što kasnije broj bude
              izvučen, to je veća kvota. Ova igra kombinuje sreću i strategiju.
              Spremite se za uzbuđenje i osvojite fantastične nagrade. Uživajte
              u igri, budite hrabri i neka sreća bude na vašoj strani!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lucky6;
