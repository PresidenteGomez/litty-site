import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
// < !--Footer -- >
            <footer className="footer text-center" id="connect">
                <h2 className="navi">Contact Us!</h2>
                <div className="container">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle" href="https://www.facebook.com/littysolar">
                                <i className="icon-social-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle" href="https://www.instagram.com/littysolar">
                                <i className="icon-social-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle" href="https://twitter.com/littysolar">
                                <i className="icon-social-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="social-link rounded-circle" href="mailto:info@littysolar.com">
                                <i className="icon-envelope-letter"></i>
                            </a>
                        </li>

                    </ul>
                    <p className="text-muted small mb-0">Copyright &copy; Litty Solar 2018</p>
                </div>
            </footer>
        );
    }
}

export default Footer;

