import React from "react";
import Nav from "./Nav";
import "./Chart.css";
import Avatars from "./Avatars";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const Chart = () => {
    const store = useSelector(store => store.Data);
    const currentTransactions = store[store.currentUser].cards[store.currentCard].transactions;
    return (
        <>
        <div id="chart-main">
        <Nav />
        <Avatars />
        <div id="bar-container">
        <Bar data={{
            labels : currentTransactions.map(transaction => transaction.title),
            datasets : [
                {
                    label : "Card Transactions (Dollars)",
                    data : currentTransactions.map(transaction => transaction.price),
                    backgroundColor : "#5A1CD4",
                    title : "Price",
                    borderRadius: 3,
                    categoryPercentage: 0.75,
                    responsive : true
                }
            ]
        }} />
        </div>
        </div>
        </>
    )
}

export default Chart