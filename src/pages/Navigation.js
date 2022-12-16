import { Outlet, Link } from "react-router-dom";
import React from "react";

function Navigation ()  {
    return (
        <nav className="navigation">
            <ul className="navigation_list">
                <li className="navigation_item">
                    <Link to="/" className="navigation_link">Home</Link>
                </li>
                <li className="navigation_item">
                    <Link to="/about" className="navigation_link">About us</Link>
                </li>
                <li className="navigation_item">
                    <a href="#!" className="navigation_link">Features</a>
                </li>
                <li className="navigation_item">
                    <a href="#!" className="navigation_link">Pricing</a>
                </li>
                <li className="navigation_item">
                    <a href="#!" className="navigation_link">FAQ</a>
                </li>
                <li className="navigation_item">
                    <a href="#!" className="navigation_link">Blog</a>
                </li>
                <li className="navigation_item">
                    <a href="#" className="navigation_link">
                        <button className="header_button" type="button">
                            Contact Us
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;