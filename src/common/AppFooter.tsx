import React, {Component} from 'react';

class AppFooter extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © 2020 <a href="https://inovatik.com">Million Thank You
                                Organization</a>
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppFooter;