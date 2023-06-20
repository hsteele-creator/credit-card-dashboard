import React from "react";
import Cards from "./Cards";
import Profile from "./Profile";
import Transactions from "./Transactions";
import "./App.css"

const Dashboard = () => {

    return (
        <>
        <div id="main">
        <Cards />
        <div id="transactions-profile">
            <Profile />
            <Transactions />
        </div>
        </div>
        </>
    )

}

export default Dashboard