import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    // url and hamburger icon status (currently not using hamburger)
    state = {
        activeUrl: "",
        hamburgerActive: false,
    }
    // figure out which page visiting based on url
    identifyActivePage = () => {
        let parsedUrl = window.location.href.split("/").pop();
        this.setState({
            activeUrl: parsedUrl,
        });
    };
    // run function on page "load"
    componentDidMount = () => {
        this.identifyActivePage()
    };
    // run function on page update
    componentDidUpdate = () => {
        let parsedUrl = window.location.href.split("/").pop();
        if (parsedUrl !== this.state.activeUrl) {
            this.identifyActivePage()
        };
    };
    // change the hamburger button icon from buns to cross (currently not using)
    changeHamburgerStatus = () => {
        if (this.state.hamburgerActive) {
            this.setState({
                hamburgerActive: false,
            });
        } else {
            this.setState({
                hamburgerActive: true,
            });
        };
    };
    render() {
        return (
            // < !--Nav  -->
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navi">
                <div className="container">
                    <Link className="navbar-brand justify-content-center" id="logo-navbar-middle" to="/">
                        <img src="img/LittySolarLogo.png" width="50" height="50" alt="" />
                    </Link>
                    <h2 className="navi">
                        <i>Litty Solar</i>
                    </h2>
                    {/* hamburger btn */}
                    <button 
                        className="navbar-toggler navbar-toggler-right" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/"><a className="link anim-destination"><span data-hover="Home">Home</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services"><a className="link anim-destination"><span data-hover="Solutions">Solutions</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about"><a className="link anim-destination"><span data-hover="About">About</span></a></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="mission">Mission</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="why">Why</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="properties">Properties</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="system-type">System Types</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="contact"><a className="link anim-destination"><span data-hover="Contact">Contact</span></a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="community"><a className="link anim-destination"><span data-hover="Community">Community</span></a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Header;
