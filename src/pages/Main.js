
import Intro from "../components/intro";
import How from "../components/how";
import Projects from "../components/projects";
import Features from "../components/features";
import Reviews from "../components/reviews";
import React from "react";


function Main() {
    return (
        <main className="main">
            <Intro/>
            <How/>
            <Projects/>
            <Features/>
            <Reviews/>
        </main>
    );
}

export default Main;