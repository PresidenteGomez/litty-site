import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <article className="footer-iframe">
                {/* <section className="content-section bg-primary" id="services">
                    <div className="container">
                        <div className="content-section-heading">
                            <h2 className="text-secondary mb-0">Contact Us!</h2>
                            <p className="lead mb-5">
                                Hi! We're fixing this place up, so please email us at info@littysolar.com with any questions.
                        </p>
                        </div>
                    </div>
                   
                </section> */}
                <section>
                    <div className="container">
                        <div className="typeform">
                            <iframe width="100%" height="100%" frameborder="50" src="https://nestor54.typeform.com/to/s7aes6"></iframe>
                        </div>
                    </div>
                    
                </section>
            </article>
        )
    }
}

export default Contact;