import React from "react";
import Mision from "./mission";
import Vision from "./vision";

function AboutMisionVision() {
    return (
        <section className="mission-vision">
            <div className="wraper">
               <Mision/>
                <Vision/>
            </div>
        </section>
);
}

export default AboutMisionVision;