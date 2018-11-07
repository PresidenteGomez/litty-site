import React, { Component } from 'react';


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render () {
return (
    <article>
        <header className="masthead d-flex">
            <div className="container text-center my-auto">
                <h1 className="mb-1">Empowering Communities Forward</h1>
                
    </div>
            <div className="overlay"></div>
        </header>

        <section className="content-section bg-primary" id="services">
            <div className="container">
                {/* <div className="content-section-heading">
                    <h2 className="text-secondary mb-0">Solutions</h2>
                    <p className="lead mb-5">Our services consist of installing and maintaining solar panels. We will go through an extremely thorough solar system
          design process and will present to you the best options available.

        </p> */}
            <div>
                <div className="row mt-5 pt-5" >
                    <div className="col-md-5" >
                        <a>
                                    <img className="img-fluid mb-3 mb-md-0" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a748e7b25651211d3092e562247c860&auto=format&fit=crop&w=1950&q=80" alt="" />
                        </a>
                    </div>
                        <div className="col-md-7">
                             <h2>Experience Mattters</h2>
                                 <p>Don't settle for unexperienced installers when you can count on Litty Solar's team of expert Solar Specialists.</p>
                            <div class="col-md-5 pt-3">
                                <div class="wrapper">
                                    <a href="#">Meet Our Team<span class="arrow">
                                        <span>
                                        </span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                           
                           
                        </div>

                </div>
            </div>
           
            <div>
                <div className="row mt-5 pt-5">
                        <div className="col-md-5 ">
                            <a>
                                <img className="img-fluid mb-3 mb-md-0" src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42b2a1b20eb0691b8153c4c1fd22ddb1&auto=format&fit=crop&w=1990&q=80" alt="" />
                            </a>
                        </div>
                        <div className="col-md-7" >

                            <h2>Equitable Solar Energy For Everyone</h2>
                            <p>We want to become champions in the renewable energy space and create equal access for everyone to use solar energy while remaining true to our values and best business practices.</p>
                            <div class="col-md-5 pt-3">
                                <div class="wrapper">
                                    <a href="#">Get To Know Us<span class="arrow">
                                        <span>
                                        </span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                            
                        </div>

                      

                </div>
            </div>
           
                <div>
                    <div className="row mt-5 pt-5">
                <div className="col-md-5">
                    <a>
                                <img className="img-fluid mb-3 mb-md-0" src="https://images.unsplash.com/photo-1509389928833-fe62aef36deb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b999902f396cad41612b6df6477bcf&auto=format&fit=crop&w=1900&q=80" alt="" />
                    </a>
                </div>
                <div className="col-md-7">
                    <h2>Energy Production for Decades</h2>
                    <p>We offer a variety of solutions for your complex energy needs, regardless if you're a home owner, business, or renter. Our goal is to ensure everyone has access to clean energy.</p>
                       
                              <div class="col-md-5 pt-3">
                                <div class="wrapper">
                                    <a href="#">See Our Solutions<span class="arrow">
                                        <span>
                                        </span>
                                    </span>
                                    </a>
                                </div>
                            </div>
                           
                    
                </div>

            </div>
    
           
            </div>
    </div>
        {/* </div> */}
        </section>
    </article>
    
)
    }
}

export default Home;