import React, {Component} from 'react';
import logoImage from '../assets/logo2.png';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top top-nav-collapse">
                    <a className="navbar-brand logo-image" href="/"><img src={logoImage}
                                                                         alt="alternative"/></a>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/aboutus">About us</a>
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
                    </div>
                </nav>
            </div>
        );
    }
}

export default AppHeader;