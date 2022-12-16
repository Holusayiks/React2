import React from 'react';
import HowCard from "./how-card";

import img1 from "../img/svg/home/01.svg";
import img2 from "../img/svg/home/02.svg";
import img3 from "../img/svg/home/03.svg";
import img4 from "../img/svg/home/04.svg";



function HowCards(){
    return (
        <div className="how_cards">
            <HowCard title="Strategy" img={img1} alt="01" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            <HowCard title="Wireframing" img={img2} alt="02" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            <HowCard title="Design" img={img3} alt="03" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            <HowCard title="Development" img={img4} alt="04" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
        </div>
    );
}

export default HowCards;