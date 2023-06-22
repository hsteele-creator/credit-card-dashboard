import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <>
        <div id="nav">
        <NavLink to="/">Dashboard</NavLink>
        {/* <NavLink to="/add-card">Add Card</NavLink> */}
        </div>
        </>
    )
}

export default Nav