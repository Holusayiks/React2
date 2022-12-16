import React from 'react';

import FooterContentWrap from "./footer-content-wrap";
import FooterContactInfo from "./footer-contact-info";

function FooterContent(){
    return (
        <div className="footer-content">
            <div className="wraper">
                <FooterContentWrap/>
                <FooterContactInfo/>
            </div>
        </div>
    );
}

export default FooterContent;