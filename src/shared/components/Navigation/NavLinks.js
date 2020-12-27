//Collection of links will be stored here. Links in header
//as well as in the side drawer.
import React from "react";
import { NavLink} from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks() {
    return (
       <ul className="nav-links">
            <li>
                <NavLink to="/" exact>ALL USERS</NavLink>
            </li>
            {/* This will render when we are logged in */}
            <li>
                <NavLink to="/u1/places">MY PLACES</NavLink>
            </li>
            {/* This will render when we are logged in */}
            <li>
                <NavLink to="/places/new">ADD PLACE</NavLink>
            </li>
            {/* This will render when we are NOT logged in */}
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
       </ul>
    )
}
