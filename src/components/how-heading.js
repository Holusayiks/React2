import React from 'react';

function HowHeading(){
    return (
        <div className="how_heading">
            <h2 className="how_heading-title">
                How we work
            </h2>
            <p className="how_heading-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <a href="" className="how_heading-link">
                Get in touch with us
                <img src={require('../img/svg/arrow-blue.svg').default} alt="Arrow" className="how_heading-link_arrow"/>
            </a>
        </div>
    );
}

export default HowHeading;