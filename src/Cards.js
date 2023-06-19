import React from "react";
import { Data } from "./Data";
import "./Cards.css";
import chip from "./chip.png";
import { useState } from "react";

const Cards = () => {
  const currentCards = Data[Data.currentUser].cards;

  const [active, setActive] = useState(0);
  const activeCard = currentCards[active];
  console.log(activeCard)
  return (
    <>

      <div id="cards-container">
        <h2 id="cards-container-title">My Cards</h2>

        {currentCards.map((card, i) => {
          return (
            <div className={activeCard.cardNumber === card.cardNumber ? "active-card" : "card"} onClick={() => setActive(i)}>
              <img id="card-chip-img" src={chip} />
              <p id="balance">Balance</p>
              <p id="balance-total">${card.balance}</p>
              <p id="card-type">{card.cardType}</p>
              <p id="expiration">Good Thru</p>
              <p id="card-date">{card.month}/{card.year}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
