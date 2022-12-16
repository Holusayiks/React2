import React from 'react';

function FooterLinks(){
    return (
        <div className="footer_links">
            <div className="wraper">
                <div className="footer-links_wrap">
                    <p className="copyright-info">
                        Copyright 2021, Finsweet.com
                    </p>
                    <nav className="footer-navigation">
                        <ul className="navigation_list">
                            <li className="footer-navigation_item">
                                <a href="/index.html" className="footer-navigation_link">Home</a>
                            </li>
                            <li className="navigation_item">
                                <a href="./about.html" className="footer-navigation_link">About us</a>
                            </li>
                            <li className="footer-navigation_item">
                                <a href="/#!" className="footer-navigation_link">Features</a>
                            </li>
                            <li className="footer-navigation_item">
                                <a href="/#!" className="footer-navigation_link">Pricing</a>
                            </li>
                            <li className="footer-navigation_item">
                                <a href="/#!" className="footer-navigation_link">FAQ</a>
                            </li>
                            <li className="footer-navigation_item">
                                <a href="/#!" className="footer-navigation_link">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default FooterLinks;