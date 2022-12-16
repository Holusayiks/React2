import React from "react";

import man from "../img/jpg/home/man-in-black-suit-holding-a-calling-card.jpg";
import seriousMan from "../img/jpg/home/serious-man.jpg";
import manInWhiteShirt from "../img/jpg/home/man-in-white-shirt-wearing-blue-bucket-hat.jpg";
import transgenderModel from "../img/jpg/home/transgender-model-touching-forehead-in-neon-light.jpg";
import TeammateCard from "./teammate-card";

function AboutOurTeam() {
    return (
        <section className="our-team">
            <div className="wraper">
                <h2 className="our-team_title">
                    Meet our team
                </h2>
                <div className="team">
                    <TeammateCard image={man} name="John Smith" position="CEO"/>
                    <TeammateCard image={seriousMan} name="Simon Adams" position="CTO"/>
                    <TeammateCard image={manInWhiteShirt} name="Paul Jones" position="Design Lead"/>
                    <TeammateCard image={transgenderModel} name="Sara Hardin" position="Project Manager"/>
                </div>
            </div>
        </section>
);
}

export default AboutOurTeam;