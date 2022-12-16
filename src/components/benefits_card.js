import React from 'react';

function BenefitsCard(props){
    return (
    <div className="benefits-card">
        <img src={props.icon} alt="Pen and paper icon"
             className="features-card_ico"/>
        <h4 className="features-card_title">
            {props.title}
        </h4>
        <p className="features-card_desc">
            {props.text}
        </p>
    </div>
    );
}

export default BenefitsCard;