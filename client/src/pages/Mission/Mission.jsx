import React, { Component } from 'react';

class Mission extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render () {
return (
  
        <article>
            <section className="content-section bg-primary" id="mission">
                <div className="container">
                    <div className="content-section-heading">
                        <h2 className="text-secondary mb-0">Mission</h2>
                        <p className="lead mb-5">Our mission is to empower the world with renewable energy and economic equity. We are innovative nonconformists and
                          want to transform how sustainable power is generated, consumed, and integrated in tomorrow’s society.
        </p>

                    </div>
                </div>

            </section>
        </article>

)
    }
}

export default Mission;