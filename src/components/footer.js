import React from 'react';

import FooterLinks from "./footer-links";
import FooterContent from "./footer-content";

function Footer(){
    return (
        <footer className="footer">
            <FooterContent/>
            <FooterLinks/>
        </footer>
    );
}

export default Footer;