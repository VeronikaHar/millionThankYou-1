import React, { Component } from 'react';

class AppFooter extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="nav-item social-icons ml-auto">
                                <span className="fa-stack">
                                    <a href="https://www.facebook.com/millionthankyouorg" target="_blank">
                                        <span className="hexagon">
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 98.4 88.3" viewBox="0 0 98.4 88.3">
                                                <path d="m1.2 49.3c-1.6-3.3-1.6-7.1 0-10.4l19.5-33.7c2-3.1 5.3-5 9-5.2h39c3.7.2 7 2.1 9 5.2l19.5 33.8c1.6 3.3 1.6 7.1 0 10.4l-19.5 33.7c-2 3.1-5.3 5-9 5.2h-39c-3.7-.2-7-2.1-9-5.2z" fill="#14bf98" />
                                                <path xmlns="http://www.w3.org/2000/svg" d="m1.2 49.3c-1.6-3.3-1.6-7.1 0-10.4l19.5-33.7c2-3.1 5.3-5 9-5.2h39c3.7.2 7 2.1 9 5.2l19.5 33.8c1.6 3.3 1.6 7.1 0 10.4l-19.5 33.7c-2 3.1-5.3 5-9 5.2h-39c-3.7-.2-7-2.1-9-5.2z" fill="#14bf98" />

                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" viewBox="0 0 320 512">
                                                <path fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </span>
                                    </a>
                                </span>
                            </span>
                            <p className="p-small">
                                Copyright © 2020 Million Thank You Organization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppFooter;