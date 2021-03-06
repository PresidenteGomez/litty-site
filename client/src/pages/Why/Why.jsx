import React, { Component } from 'react';

class Why extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render () {
return (
    <article>
        <section className="parallax bg-light" id="why">

            <div className="container">

                <div className="content-section-heading">
                    <h2 className="text-secondary mb-0">Why</h2>
                    <p className="lead mb-5">We do not want to be another regular company; we want to thrive while enriching communities wherever we go. Hence,
                      our solution is to provide solar power as a less expensive alternative to fossil-fuel derived energy and as a
                      means to social and economic equity. Our unique approach of incorporating economic equity and renewable energy
                      is what differentiates us from the rest of the solar companies in Minnesota and around the world.
          </p>

                </div>


            </div>


        </section>
    </article>
)
    }
}


export default Why;