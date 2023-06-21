import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <>
        <div id="nav">
        <NavLink to="/">Dashboard</NavLink>
        {/* <NavLink to="/transactions">Transactions</NavLink> */}
        </div>
        </>
    )
}

export default Nav