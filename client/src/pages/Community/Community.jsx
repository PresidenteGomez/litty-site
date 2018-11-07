import React, { Component } from 'react';

class Community extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <article>
                <section className="content-section bg-primary" id="services">
                    <div className="container">
                        <div className="content-section-heading">
                            <h2 className="text-secondary mb-0">Whats Happening Around Us?</h2>
                            <p className="lead mb-5">
                                We're highlighting what Minnesota is doing! Send us a story and we'll publish it!
                        </p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

export default Community;