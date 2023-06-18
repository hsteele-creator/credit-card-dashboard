import React from "react";
import { Data } from "./Data";
import "./Cards.css";
import chip from "./chip.png";

const Cards = () => {
  const currentCards = Data[Data.currentUser].cards;
  console.log(currentCards);
  return (
    <>

      <div id="cards-container">
        <h2 id="cards-container-title">My Cards</h2>

        {currentCards.map((card) => {
          return (
            <div className="card">
              <img id="card-chip-img" src={chip} />
              <p id="balance">Balance</p>
              <p id="balance-total">${card.balance}</p>
              <p id="card-type">{card.cardType}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
