import React from 'react';
import HowHeading from "./how-heading";
import HowCards from "./how-cards";

function How(){
    return (
        <section className="how">
            <div className="wraper">
                <div className="how_wraper">
                    <HowHeading/>
                    <HowCards/>
                </div>
            </div>
        </section>
    );
}

export default How;