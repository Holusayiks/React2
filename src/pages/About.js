import React from "react";
import AboutPreview from "../components/about-preview";
import AboutOurTeam from "../components/about-ourteam";
import AboutBenefits from "../components/about-benefits";
import AboutMisionVision from "../components/about-missionvision";

function About() {
    return (
        <main className="main">
            <AboutPreview/>
            <AboutMisionVision/>
            <AboutBenefits/>
            <AboutOurTeam/>
        </main>
    );
}

export default About;