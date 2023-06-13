import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./addgame.scss";

function AddGame() {
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
    <div className="cards">
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
            <div className="gameName">Cards</div>
            <div className="gameText">
              Cards - igra u kojoj ćete skupljati karte koje padaju s ciljem da
              zaradite što više novca. Vaš zadatak je brzo reagovati i uhvatiti
              padajuće karte pre nego izmaknu. Svaka skupljena karta donosi
              određeni iznos, čime ćete povećavati svoj balans. Veština, brzina
              i preciznost će biti ključni faktori za postizanje rezultata.
              Nakon svake runde, prikazaće vam se rezultat broja skupljenih
              karata i iznosa zarade. Možete koristiti zaradu za kladjenje u
              drugim igrama.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGame;
