import React from 'react';

function HowCard(props){
    return (
        <div className="how_card">
            <img className="how_card-pic" src={props.img} alt={props.alt}/>
            <h3 className="how_card-title">
                {props.title}
            </h3>
            <p className="how_card-desc">
                {props.text}
            </p>
        </div>
    );
}

export default HowCard;