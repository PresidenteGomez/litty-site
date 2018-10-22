import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
    // < !--Nav  -->
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navi">
                <div className="container">
                    <a className="navbar-brand justify-content-center" id="logo-navbar-middle" href="#">
                        <img src="img/LittySolarLogo.png" width="50" height="50" alt="" />
      </a>
                        <h2 className="navi">
                            <i>Litty Solar</i>
                        </h2>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#page-top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#mission">Mission</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#why">Why</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#properties">Properties</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#types">System Types</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#connect">Contact</a>
                                </li>
                            </ul>
                        </div>
                        </div>
  </nav>
                   
                          );
                      }
                  }
                  
                  export default Header;
