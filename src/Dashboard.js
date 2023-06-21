import React from "react";
import Cards from "./Cards";
import Profile from "./Profile";
import Transactions from "./Transactions";
import "./App.css";
import Chart from "./Chart";

const Dashboard = () => {

    return (
        <>
        <div className="main">
        <Cards />
        <Chart />
        <div className="transactions-profile">
            <Profile />
            <Transactions />
        </div>
        </div>
        </>
    )

}

export default Dashboard