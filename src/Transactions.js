import React from "react";
import { Data } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Transaction from "./Transaction";
import "./Transactions.css";
import Profile from "./Profile";

const Transactions = () => {
  const store = useSelector((state) => state.Data);
  const currentUser = store.currentUser;
  const currentCards = store[store.currentUser].cards;
  const currentCard = currentCards[store.currentCard];
  const currentTransactions = currentCard.transactions;

  // const [transactions, setTransactions] = useState(currentTransactions);
  const [search, setSearch] = useState("");



  const filteredTransactions = () => {
    if(search === "") {
      return currentTransactions
    } else {
      return currentTransactions.filter(transaction => transaction.title.includes(search.toLowerCase()))
    }
  }

  const handleSearch = (e) => {
    setSearch(search => e.target.value);

    return filtered

  }

  const filtered = filteredTransactions();

  return (
    <>
      <div id="transactions-main">
        <h2 id="transaction-title">
          Card <span>History</span>
        </h2>

        <div id="search-form">
          <input
            placeholder="search by title"
            onChange={(e) => handleSearch(e)}
            value={search}
          ></input>
          <button id="search-button" onClick={() => setSearch("")}>Reset</button>
        </div>

        {filtered.map((transaction) => {
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
