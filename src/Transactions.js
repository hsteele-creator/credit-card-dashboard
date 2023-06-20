import React from "react";
import { Data } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import "./Transactions.css";
import Profile from "./Profile";

const Transactions = () => {
  const store = useSelector((state) => state.Data);
  const currentUser = store.currentUser;
  const currentCards = store[store.currentUser].cards;
  const currentCard = currentCards[store.currentCard];
  const currentTransactions = currentCard.transactions;

  return (
    <>
      <div id="transactions-main">
        <h2 id="transaction-title">Card History</h2>
        {currentTransactions.map((transaction) => {
          return (
            <Transaction
              title={transaction.title}
              image={transaction.image}
              price={transaction.price}
              time={transaction.time}
              date={transaction.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default Transactions;
