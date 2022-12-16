import React from "react";
import penPaperIco from "../img/svg/home/pen-paper-ico.svg";
import pencilRulerIco from "../img/svg/home/pencil-ruler-ico.svg";
import personsIco from "../img/svg/home/persons-ico.svg";
import sponsors from "../img/svg/about_us/sponsors.svg";
import BenefitsCard from "./benefits_card";

function AboutBenefits() {
    return (
        <section className="benefits">
            <div className="wraper">
                <h2 className="benefits-heading">
                    The benefits of working with us
                </h2>
                <div className="benefits-cards">
                    <BenefitsCard
                        title="Customize with ease"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={penPaperIco}/>
                    <BenefitsCard
                        title="Perfectly Responsive"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={pencilRulerIco}/>
                    <BenefitsCard
                        title="Friendly Support"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={personsIco}/>
                </div>
                <div className="benefits-footing">
                    <div className="users-count">
                        <h2 className="users-number">
                            100.000+
                        </h2>
                        <h3 className="users-count_subtitle">
                            Finsweet Users
                        </h3>
                    </div>
                    <img src={sponsors} alt="" className="sponsors"/>
                </div>
            </div>
        </section>
);
}

export default AboutBenefits;