import React from "react";
import "./CardInfo.css";
import { useSelector } from "react-redux";

const CardInfo = () => {
  const store = useSelector((state) => state.Data);
  const pathToCard = store[store.currentUser].cards[store.currentCard];
  const income = pathToCard.income;
  const outcome = pathToCard.outcome;
  const savings = pathToCard.savings
  return (
    <>
      <div id="card-info-container">
        <div className="card-info-div">
            <p>Income</p>
            <h2>${income}</h2>
        </div>
        <div className="card-info-div">
            <p>Outcome</p>
            <h2>${outcome}</h2>
        </div>
        <div className="card-info-div">
            <p>Savings</p>
            <h2>${savings}</h2>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
