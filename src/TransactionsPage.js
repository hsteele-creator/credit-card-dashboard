import React from "react";
import Profile from "./Profile";
import Cards from "./Cards";
import "./TransactionsPage.css";
import "./App.css";
import Nav from "./Nav";
import Transactions from "./Transactions";

const TransactionsPage = () => {
    return (
        <>
        <div className="main">
        <Cards />
        <Nav />
        </div>
        </>
    )
}

export default TransactionsPage;