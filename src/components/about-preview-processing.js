import React from "react";

import blueCircleIco from "../img/svg/about_us/blue-circle-ico.svg";
import blueLine from "../img/svg/about_us/blue-line.svg";
import ProcessingStep from "./about-preview-processing-step";

function Processing() {
    return (
        <div className="processing">
            <h2 className="processing_title">
                The process we follow
            </h2>
            <div className="processing-steps">
                <ProcessingStep title="Planning" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <ProcessingStep title="Conception" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <ProcessingStep title="Design" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                <ProcessingStep title="Development" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
            </div>
        </div>
    );
}

export default Processing;