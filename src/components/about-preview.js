import React from "react";

import Designers from "./about-preview-designers";
import BusinessCard from "./about-preview-business-card";
import Processing from "./about-preview-processing";

function AboutPreview() {
    return (
        <section className="preview">
            <div className="wraper">
                <Designers/>
                <BusinessCard/>
                <Processing/>
            </div>
        </section>
);
}

export default AboutPreview;