import React from 'react';

function FooterContentWrap(){
    return (
        <div className="footer-content_wrap">
            <div className="logo-container">
                <div className="logo">
                    <a href="./index.html" className="header_logo-link">
                        <img className="header_logo-pic" src={require('../img/svg/logo.svg').default} alt="{Finsweet"/>
                    </a>
                </div>
                <div className="logo_subtitle">
                    We are always open to discuss your project and improve your online presence.
                </div>
            </div>
            <div className="lets-talk">
                <h3 className="lets-talk_title">
                    Lets talk!
                </h3>
                <p className="lets-talk_desc">
                    We are always open to discuss your project, improve your online presence and help with
                    your UX/UI design challenges.
                </p>
                <div className="soc-ico">
                    <div className="social-media-icon">
                        <a href="./#!" className="social-media-icon-link">
                            <img className="social-media-icon-pic" src={require('../img/svg/Facebook.svg').default}
                                 alt="Facebook"/>
                        </a>
                    </div>
                    <div className="social-media-icon">
                        <a href="./#!" className="social-media-icon-link">
                            <img className="social-media-icon-pic" src={require('../img/svg/Twitter.svg').default} alt="Twitter"/>
                        </a>
                    </div>
                    <div className="social-media-icon">
                        <a href="./#!" className="social-media-icon-link">
                            <img className="social-media-icon-pic" src={require('../img/svg/Instagram.svg').default}
                                 alt="Instagram"/>
                        </a>
                    </div>
                    <div className="social-media-icon">
                        <a href="./#!" className="social-media-icon-link">
                            <img className="social-media-icon-pic" src={require('../img/svg/LinkedIn.svg').default}
                                 alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContentWrap;