import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
// < !--Footer -- >

            
            <section>
                
                <footer className="footer text-center" id="connect" >
            
        <div className="container">
                    <div className="row"> 
                        <div className="col-md-5">

                        <h2 className="navi">Connect With Us!</h2>
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
                                    <a className="social-link rounded-circle" href="https://medium.com/@littysolar">
                                        <i class="fa fa-medium" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>
                            
                        </div>

                    
                        
                    
                        <div className="col-md-4">

                        <h6 className="navi">Litty Solar LLC</h6>
                        <h6 className="navi">6725 Colorado Ave. N.,</h6>
                        <h6 className="navi">Brooklyn Park, MN 55429</h6>      
                        </div>

                        <div className="col-md-3">
                        <h6 className="navi">BC#: BC746859 </h6>
                        <h6 className="navi">NABCEP: PVA-020518-020196</h6>
                        <p className="text-muted small mb-0">Copyright &copy; Litty Solar 2018</p>
                        </div>
                    </div>

                    </div>
        </footer>
                </section>
        );
    }
}

export default Footer;

