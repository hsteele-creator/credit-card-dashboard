import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
    const store = useSelector(state => state.Data);
    const currentCards = store[store.currentUser].cards;
    const balance = currentCards.map(card => card.balance).map(string => Number(string)).reduce((acc, next) => acc + next)
    console.log(balance);
  return (
    <>
      <div id="profile-main">
        <div id="balance-container">
            <p id="balance-heading">Wallet balance:</p>
            <p id="total">${balance}.00</p>
        </div>

        <div id="avatar-container"></div>
      </div>
    </>
  );
};

export default Profile;
