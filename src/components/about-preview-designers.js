import React from "react";

import groupOfPeople from "../img/jpg/about us/group-of-people.jpg";

function Designers() {
    return (
        <div className="designers">
            <div className="designers-heading">
                <h3 className="designers_pre-title">
                    About us
                </h3>
                <h2 className="designers_title">
                    Our designs solve problems
                </h2>
                <p className="designers_desk">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <img src={groupOfPeople} alt="Group of people"
                 className="designers_pic"/>
        </div>
    );
}

export default Designers;