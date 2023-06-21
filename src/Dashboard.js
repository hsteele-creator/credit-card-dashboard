import React from "react";
import Cards from "./Cards";
import Profile from "./Profile";
import Transactions from "./Transactions";
import "./App.css";
import Nav from "./Nav";

const Dashboard = () => {

    return (
        <>
        <div className="main">
        <Cards />
        <Nav />
        <div className="transactions-profile">
            <Profile />
            <Transactions />
        </div>
        </div>
        </>
    )

}

export default Dashboard