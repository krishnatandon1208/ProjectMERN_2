//This component will contain all the links
import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function MainNavigation() {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link>
            </h1>
            <nav>
                ...
                {/* To add nav links later */}
            </nav>
        </MainHeader>
    )
}