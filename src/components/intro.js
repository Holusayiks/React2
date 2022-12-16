import React from 'react';

function Intro(){
    return (
        <section className="intro">
            <div className="wraper">
                <div className="intro_wraper">
                    <div className="intro-heading">
                        <h1 className="intro_title">
                            Building stellar websites for early startups
                        </h1>
                        <p className="intro_subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt.
                        </p>
                        <div className="intro-buttons">
                            <a href="/#!" className="intro_button-link">
                                <button className="intro_button" type="button">
                                    View our work
                                </button>
                            </a>
                            <a href="/#!" className="intro_text-button-link">
                                <button className="intro_text-button" type="button">
                                    View Pricing
                                    <img src={require('../img/svg/arrow1.svg').default} alt="Arrow" className="intro_text-button_arrow"/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="intro_illustration">
                        <img src={require('../img/svg/home/illustration.svg').default} alt="Picture"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;