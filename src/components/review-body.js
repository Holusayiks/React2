import React from 'react';

import profileIco from "../img/jpg/home/profile-ico.jpg";


function ReviewBody(){
    return (
        <div className="review">
            <p className="review_text">
                "The best agency we’ve worked with so far. They understand our product and are able to
                add new features with a great focus."
            </p>
            <div className="review-bottom-box">
                <div className="reviewer">
                    <img src={profileIco} alt="User`s avatar icon"
                         className="reviewer-ico"/>
                    <div className="reviewer-info">
                        <h3 className="reviewer_name">
                            Jenny Wilson
                        </h3>
                        <h4 className="reviewer_bio">
                            Vice President
                        </h4>
                    </div>
                </div>
                <div className="reviews-arrows">
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24"
                                 transform="rotate(-180 24.0995 24)" fill="white"/>
                        <path opacity="0.6"
                              d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z"
                              fill="#282938"/>
                    </svg>
                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA"/>
                        <path
                            d="M18.4141 35L17 31.7805L26.0305 24.0894L17 16.2195L18.4141 13L30 23.374V25.1626L18.4141 35Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ReviewBody;