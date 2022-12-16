import React from "react";

import manInJacket from "../img/jpg/about us/man-in-jacket.jpg";

function BusinessCard() {
    return (
        <div className="business-card">
            <div className="business-card_heading">
                <h3 className="business-card_pre-title">
                    Who we are
                </h3>
                <div className="heading-parts">
                    <div className="heading-part">
                        <h2 className="business-card_title">
                            Goal focussed
                        </h2>
                        <p className="business-card_desk">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="heading-part">
                        <h2 className="business-card_title">
                            Continuous improvement
                        </h2>
                        <p className="business-card_desk">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <img src={manInJacket} alt="Man in blue jacket looking at white board"
                 className="business-card_image"/>
        </div>
    );
}

export default BusinessCard;