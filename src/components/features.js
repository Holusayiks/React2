import React from 'react';

import FeatureCard from "./features_card";

import personsIco from "../img/svg/home/persons-ico.svg";
import checkMarkIco from "../img/svg/home/check-mark-ico.svg";
import pencilIco from "../img/svg/home/pencil-ruler-ico.svg";
import dialogIco from "../img/svg/home/dialog-ico.svg";
import timerIco from "../img/svg/home/timer-ico.svg";
import penPaperIco from "../img/svg/home/pen-paper-ico.svg";

function Features(){
    return (
        <section className="features">
            <div className="wraper">
                <h2 className="features_pre-title">
                    Features
                </h2>
                <h3 className="features_title">
                    Design that solves problems, one product at a time
                </h3>
                <div className="features-table">
                    <FeatureCard
                    title="Uses Client First"
                    text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                    icon={personsIco}/>
                    <FeatureCard
                        title="Two Free Revision Round"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={checkMarkIco}/>
                    <FeatureCard
                        title="Template Customization"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={pencilIco}/>
                    <FeatureCard
                        title="24/7 Support"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={dialogIco}/>
                    <FeatureCard
                        title="Quick Delivery"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={timerIco}/>
                    <FeatureCard
                        title="Hands-on approach"
                        text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                        icon={penPaperIco}/>


                </div>
            </div>
        </section>
    );
}

export default Features;