import React, { Component } from 'react';
import logoImage from '../assets/logo2.png';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <a className="navbar-brand logo-image" href="/"><img src={logoImage} alt="Million Thank You" /></a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About us</a>
                        </li>
                    </ul>
                    <span className="nav-item social-icons ml-auto">
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                    </span>
                </nav>
            </div>
        );
    }
}

export default AppHeader;