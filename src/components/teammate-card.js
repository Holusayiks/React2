import React from "react";

function TeammateCard(props) {
    return (
        <div className="teammate_card">
            <img src={props.image} alt="John Smith ico"
                 className="teammate_ico"/>
            <h3 className="teammate_name">
                {props.name}
            </h3>
            <h4 className="teammate_position">
                {props.position}
            </h4>
        </div>
);
}

export default TeammateCard;