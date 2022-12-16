import React from 'react';

import bigCardPic from "../img/jpg/home/big-card-pic.jpg";
import CardPic1 from "../img/jpg/home/card-pic-1.jpg";
import CardPic2 from "../img/jpg/home/card-pic-2.jpg";

function Projects(){
    return (
        <section className="projects">
            <div className="wraper">
                <div className="projects-header">
                    <h2 className="projects_title">
                        View our projects
                    </h2>
                    <a href="/#" className="projects_link">
                        View More
                        <img src={require('../img/svg/arrow-black.svg').default} alt="arrow"/>
                    </a>
                </div>
                <div className="projects-content">
                    <div className="projects-big-card">
                        <img src={bigCardPic} alt="big project card"/>
                    </div>
                    <div className="projects-small-cards">
                        <div className="project-card">
                            <img src={CardPic2} alt="small project card"/>
                        </div>
                        <div className="project-card">
                            <img src={CardPic1} alt="small project card"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;