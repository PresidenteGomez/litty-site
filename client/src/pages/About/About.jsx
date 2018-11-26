import React, { Component } from 'react';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render () {
return (
    <article className="about-background-color">
        
        <header className="better-header">
            <div class="header__bg"></div>

        </header>
                {/* <!-- About --> */}
        <section className="content-section bg-light" >
            <div className="container">
                <div className="content-section-heading">
                    <h2 className="text-secondary mb-0">We're on a Mission</h2>
                    <p className="lead mb-5">The world and its leaders are under huge societal pressures to transform the way we generate and consume energy.
                              We have a limitless access of energy through the sun yet we fail to utilize it. At Litty Solar we want to help
                              people redefine how they produce and consume their energy. We see a surge in public perception that renewable energy
                              is the future, and we believe that dearly as well. We want to enable Minnesota, Puerto Rico, and Mexico capture
                              the limitless energy and help them construct the society of tomorrow.
        </p>
                    <p className="lead mb-5">Litty Solar was founded in 2018 with the idea to make renewable energy equitable in underserved communities and to assist in disaster-relief
                              efforts. If communities are empowered with economic equity, crime and violence could see a deep
                              reduction. Litty Solar’s forward outlook is unlike companies of it’s kind. We want to tackle issues that are of dire importance to the world: sustainability and economic
                              equity.
                    
        </p>

                        </div>
                        <hr/>
                    </div>
  
            {/* <!-- end of About --> */}
        <div className="container">
                <div className="content-section-heading">
 <h2 className="text-secondary mb-0 text-center">Meet our Team</h2>
        </div>
               

            <div class="row">
                <div class="col-lg-4">
                        <img class="rounded-circle" src="https://images.unsplash.com/photo-1499294458874-649e70a7d7fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7bbd776a573ae2e415fc634d2d4c3d1&auto=format&fit=crop&w=934&q=80" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Peter</h2>
                    <h6>Chief Operating Officer</h6>
                    <p>Raised in rural Minnesota, Peter carries with him tradition and a forward outlook to conserve our environment.</p>
                    {/* <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                </div>
                <div class="col-lg-4">
                        <img class="rounded-circle" src="https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-0.3.5&s=1786297c0c03c374b8420c69f0bf3776&auto=format&fit=crop&w=934&q=80" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Nestor</h2>
                    <h6>Chief Executive Officer</h6>
                    <p>With over a decade of being active in his community, Nestor brings passion and technological experience to our team.</p>
                    {/* <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                </div>
                <div class="col-lg-4">
                        <img class="rounded-circle" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54db154f48cb6c3cbcf735fcf3ed756e&auto=format&fit=crop&w=934&q=80" alt="Generic placeholder image" width="140" height="140" />
                    <h2>Paul</h2>
                    <h6>Senior Project Manager</h6>
                    <p>With over 20 years of roofing experience, Paul brings deep and game changing knowledge to Litty Solar. </p>
                    {/* <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                </div>
            </div>
        </div>
        </section>
    </article>
)
    }
}

export default About;