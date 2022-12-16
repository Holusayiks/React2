import React from 'react';
import Navigation from "../pages/Navigation";

function Header(){
    return (
        <header className="header">
            <div className="wraper">
                <div className="header_wraper">
                    <div className="logo">
                        <a href="/#!" className="header_logo-link">
                            <img className="header_logo-pic" src={require('../img/svg/logo.svg').default} alt="{Finsweet"/>
                        </a>
                    </div>

                    <Navigation/>
                </div>
            </div>
        </header>
    );
}

export default Header;