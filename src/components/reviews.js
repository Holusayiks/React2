import React from 'react';
import ReviewHeading from "./reviwes-heading";
import ReviewBody from "./review-body";

function Reviews(){
    return (
        <section className="reviews">
            <div className="wraper">
                <div className="reviews_wraper">
                    <ReviewHeading/>
                    <ReviewBody/>
                </div>
            </div>
        </section>
    );
}

export default Reviews;