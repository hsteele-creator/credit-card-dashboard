import React from "react";
import "./AddCard.css";
import Nav from "./Nav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import netflix from "./netflix.png";
import youtube from "./youtube.png";
import amazon from "./amazon-pay.png";
import "./Cards.css";
import chip from "./chip.png";

const AddCard = () => {
  const currentUser = useSelector((state) => state.Data.currentUser);
  const [cardData, setCardData] = useState({
    cardType: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    balance: "",
    income: "",
    outcome: "",
    savings: "",
    active : false,
    transactions: [
      {
        title: "Netflix",
        image: netflix,
        price: "7.50",
        time: "10:16 PM",
        date: "01/07/2023",
      },
      {
        title: "Youtube",
        image: youtube,
        price: "15.40",
        time: "3:18 PM",
        date: "09/25/2021",
      },
      {
        title: "Amazon",
        image: amazon,
        price: "123.50",
        time: "12:22 PM",
        date: "03/17/2023",
      },
    ],
  });
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setCardData((cardData) => ({
      ...cardData,
      [name]: String(value),
    }));
  };

  const add = () => {
    if (
      cardData.cardType !== "" &&
      cardData.cardNumber !== "" &&
      Number.isInteger(Number(cardData.cardNumber)) &&
      cardData.month !== "" &&
      cardData.year !== "" &&
      cardData.cvv !== "" &&
      cardData.cardbalance !== "" &&
      Number.isInteger(Number(cardData.balance)) &&
      cardData.income !== "" &&
      Number.isInteger(Number(cardData.income)) &&
      cardData.outcome !== "" &&
      Number.isInteger(Number(cardData.outcome)) &&
      cardData.savings !== "" &&
      Number.isInteger(Number(cardData.savings))
    ) {
      dispatch({
        type: "ADD_CARD",
        payload: { name: currentUser, data: cardData },
      });
    } else {
      alert("Make sure all inputs are not blank, and the correct type!");
    }
  };

  console.log(Number.isInteger(Number(cardData.balance)))


  return (
    <>
      <div id="add-card-container">
        <Nav />
        <div id="add-cards-cards-container">
          <div className="card">
            <img className="card-chip-img" src={chip} />
            <p className="balance">Balance</p>
            <p className="balance-total">${cardData.balance}</p>
            <p className="card-type">{cardData.cardType}</p>
            <p className="expiration">Good Thru</p>
            <p className="card-date">
              {cardData.month}/{cardData.year}
            </p>
          </div>
        </div>
        <div id="form-container">
          <input
            margin="normal"
            name="cardType"
            label="Card Type"
            id="cardType"
            type="text"
            placeholder="Card Type"
            onChange={(e) => handleChange("cardType", e.target.value)}
            className="input"
          ></input>

          <input
            name="cardNumber"
            id="cardNumber"
            type="text"
            placeholder="Card Number"
            onChange={(e) => handleChange("cardNumber", e.target.value)}
            className="input"
          ></input>

          <input
            name="month"
            id="month"
            placeholder="Month"
            type="text"
            onChange={(e) => handleChange("month", e.target.value)}
            className="input"
          ></input>

          <input
            name="year"
            id="year"
            placeholder="Year"
            type="text"
            onChange={(e) => handleChange("year", e.target.value)}
            className="input"
          ></input>
          <input
            name="cvv"
            placeholder="CVV"
            type="password"
            onChange={(e) => handleChange("cvv", e.target.value)}
            className="input"
          ></input>

          <input
            name="balance"
            id="balance"
            type="text"
            placeholder="Balance"
            onChange={(e) => handleChange("balance", e.target.value)}
            className="input"
          ></input>
          <input
            name="income"
            id="income"
            type="text"
            placeholder="Income"
            onChange={(e) => handleChange("income", e.target.value)}
            className="input"
          ></input>
          <input
            name="outcome"
            id="outcome"
            type="text"
            placeholder="outcome"
            onChange={(e) => handleChange("outcome", e.target.value)}
            className="input"
          ></input>
          <input
            name="savings"
            id="savings"
            type="text"
            placeholder="savings"
            onChange={(e) => handleChange("savings", e.target.value)}
            className="input"
          ></input>
          <button onClick={() => add()}>Add Card</button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
