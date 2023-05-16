import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./dogs.scss";

function Dogs() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.add("scrolled");
      // scrolled = black background
    }
    return () => {
      if (navbar) {
        navbar.classList.remove("scrolled");
      }
    };
  }, []);
  return (
    <div className="dogs">
      <Navbar />
      <div className="gameContainer">
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/7924719?color=333333"
          // allowfullscreen=""
          width="1000"
          height="520"
          className="game"
        >
          <a href="https://deskimir.itch.io/test">Play test on itch.io</a>
        </iframe>
        <div className="gameDesc">
          <div className="imageGame">
            <div className="image-overlay"></div>
          </div>
          <div className="desc">
            <div className="gameName">Dogs</div>
            <div className="gameText">
              Trka pasa je uzbudljivo takmičenje pasa na posebno dizajniranim
              stazama. Kladioničari biraju svoje favorite i klađenjem pokušavaju
              predvideti rezultate trke. Kvota zavisi od samog psa i njegovih
              kvaliteta. Što je veća šansa za pobedu, to je manja kvota. Ova
              igra kombinuje sreću i strategiju za osvajanje fantastičnih
              nagrada. Trka pasa nudi uzbudljivo iskustvo s klađenjem i
              takmičenjem. Uživajte u uzbuđenju i pridružite se trci pasa za
              sreću i sjajne dobitke!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogs;
