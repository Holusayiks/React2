import React from "react";
import manStandingInOffice from "../img/jpg/about us/man-standing-in-office.jpg";

function Mision() {
    return (
        <div className="mission">
            <div className="mission-heading">
                <h2 className="mission-vision_pre-title">
                    Our Mission
                </h2>
                <h3 className="mission-vision_title">
                    Inspire, Innovate, Share
                </h3>
                <p className="mission-vision_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <img src={manStandingInOffice} alt="man standing in office"
                 className="mission_image"/>
        </div>
    );
}

export default Mision;