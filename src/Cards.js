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
              <img className="card-chip-img" src={chip} />
              <p className="balance">Balance</p>
              <p className="balance-total">${card.balance}</p>
              <p className="card-type">{card.cardType}</p>
              <p className="expiration">Good Thru</p>
              <p className="card-date">{card.month}/{card.year}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
