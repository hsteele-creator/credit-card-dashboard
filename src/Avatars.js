import React from "react";
import "./Avatars.css";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "./ActionCreators";

const Avatars = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = store.currentUser;
  const users = Object.keys(store).filter(
    (user) =>
      user !== "currentUser" && user !== "currentCard" && user !== "cardIndex"
  );

  return (
    <>
      <div id="avatars-container">
        {users.map((user) => {
          return (
            <img className={user === currentUser ? "current-user" : "user-image" } src={store[user].image} onClick={() => dispatch(updateCurrentUser(user))}/>
          )
        })}
      </div>
    </>
  );
};

export default Avatars;
