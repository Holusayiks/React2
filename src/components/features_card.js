import React from 'react';

function FeatureCard(props){
    return (
        <div className="features-card">
            <img src={props.icon} alt="Persons icon" className="features-card_ico"/>
            <h4 className="features-card_title">
                {props.title}
            </h4>
            <p className="features-card_desc">
                {props.text}
            </p>
        </div>
    );
}

export default FeatureCard;