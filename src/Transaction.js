import React from "react";
import "./transaction.css";

const Transaction = ({ title, image, price, date, time }) => {
  return (
    <>
      <div className="transaction-main">
        <img className="transaction-image" src={image} />

        <div className="title-price">
          <p>{title}</p>
          <p className="price">${price}</p>
        </div>

        <div className="date-time">
          <p>{time}</p>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Transaction;
