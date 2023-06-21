import React from "react";
import "./Cards.css";
import chip from "./chip.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentCard } from "./ActionCreators";

const Cards = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.Data);
  const currentCards = store[store.currentUser].cards;
  const currentCard = currentCards[store.currentCard];
  return (
    <>

      <div id="cards-container">
        <h2 id="cards-container-title">My <span>Cards</span> </h2>

        {currentCards.map((card, i) => {
          return (
            <div className={currentCard.cardNumber === card.cardNumber ? "active-card" : "card"} onClick={() => dispatch(updateCurrentCard(i))}>
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
