import React from "react";

import blueCircleIco from "../img/svg/about_us/blue-circle-ico.svg";
import blueLine from "../img/svg/about_us/blue-line.svg";

function ProcessingStep(props) {
    return (
        <div className="processing-step">
            <div className="processing-line-and-ico">
                <img src={blueCircleIco} alt="Blue circle"
                     className="processing-step_ico"/>
                <img src={blueLine} alt="Blue line"
                     className="processing-step_line"/>
            </div>
            <h3 className="processing-step_title">
                {props.title}
            </h3>
            <p className="processing-step_desc">
                {props.text}
            </p>
        </div>
    );
}

export default ProcessingStep;