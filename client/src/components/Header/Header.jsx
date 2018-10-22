import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
    // < !--Nav  -->
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" className="navi">
                <div class="container">
                    <a class="navbar-brand justify-content-center" id="logo-navbar-middle" href="#">
                        <img src="img/LittySolarLogo.png" width="50" height="50" alt="" />
      </a>
                        <h2 class="navi">
                            <i>Litty Solar</i>
                        </h2>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#page-top">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#mission">Mission</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#why">Why</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#properties">Properties</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#types">System Types</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#connect">Contact</a>
                                </li>
                            </ul>
                        </div>
                        </div>
  </nav>
                   
                          );
                      }
                  }
                  
                  export default Header;
