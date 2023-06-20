import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <>
        <div id="nav">
        <NavLink to="/">Dashboard</NavLink>
        </div>
        </>
    )
}

export default Nav