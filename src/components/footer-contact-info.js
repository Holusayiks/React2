import React from 'react';

function FooterContactInfo(){
    return (
        <div className="contact-info">
            <div className="email-info">
                <h2 className="contact-info_title">
                    Email me at
                </h2>
                <p className="contact-info_subtitle">
                    contact@website.com
                </p>
            </div>
            <div className="call-info">
                <h2 className="contact-info_title">
                    Call Us
                </h2>
                <p className="contact-info_subtitle">
                    0927 6277 28525
                </p>
            </div>
        </div>
    );
}

export default FooterContactInfo;