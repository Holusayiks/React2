import React from "react";

import womenAtTheMeeting from "../img/jpg/about us/women-at-the-meeting.jpg";

function Vision() {
    return (
        <div className="vision">
            <img src={womenAtTheMeeting} alt="women at the meeting"
                 className="vision_image"/>
            <div className="vision-heading">
                <h2 className="mission-vision_pre-title">
                    Our Vision
                </h2>
                <h3 className="mission-vision_title">
                    Laser focus
                </h3>
                <p className="mission-vision_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}

export default Vision;