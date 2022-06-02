import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="tm__header">
            <div className="tm__header-titleWrapper">
                <h1 className="tm__header-title">
                Test User Manager
                </h1>
                <div className="tm__header-version">
                v 1.0
                </div>
            </div>
            <a className="tm__header-swaggerLink" href="https://swagger.io/" target="_blank">
            Open swagger
            </a>
        </div>
    )
}

export default Header