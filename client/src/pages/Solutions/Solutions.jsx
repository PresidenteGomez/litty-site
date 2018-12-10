import React, { Component } from 'react';
import ServicesType from '../../components/ServicesType';


class Solutions extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
}
    render () {
return (
    <article className="solutions-background-color">
  {/* <!-- Services --> */}
    <header className="better-header">
      <div class="header__bg"></div>
      
    </header>

  <section className="content-section bg-primary" id="services">
    <div className="container">
  
     {/* SOLUTIONS TOP BAR */}
        <div className="content-section-heading" id="services">
          <div>
            <h2>Solutions</h2>
            <p className="lead mb-5">There's a solution for everyone. No matter the circumstances. </p>
          </div>
        </div>

{/* SOLAR PANEL INSTALLATIONS */}
        <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="solutions-better" class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white ">
            <div class="my-3 py-3">
              <h2 class="display-5">Residential</h2>
              <p class="lead">Make your home stand out with panels or solar shingles and see it increase in value.</p>
              <a>
                <img className="img-fluid mb-3 mb-md-0" src="https://i2.wp.com/www.roofingcalc.com/wp-content/uploads/2018/05/certainteed-apollo-2-solar-shingles-roof.jpg?ssl=1" alt="" width="500px" height="350px"/>
              </a>
            </div>
            <div class="bg-light shadow-sm mx-auto" >
            </div>
          </div>
          <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
            <div class="my-3 p-3">
              <h2 class="display-5">Business</h2>
              <p class="lead">Businesses can see the biggest and quickest return on investment when they go green and start generating their own power!</p>
              <a>
                <img className="img-fluid mb-3 mb-md-0" src="https://images.unsplash.com/photo-1507990115655-4e5bc206cc19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9d2afac0220244c3ee1e0967b300635&auto=format&fit=crop&w=1568&q=80" alt="" width="600px" height="350px"/>
              </a>
            </div>
            <div class="bg-dark shadow-sm mx-auto"></div>
          </div>
        </div>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        
          <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
            <div class="my-3 p-3">
              <h2 class="display-5">Non-Profits</h2>
              <p class="lead">If you're a school, church, or a NGO we can help you become more sustainable through different mediums.</p>
              <a>
                <img className="img-fluid mb-3 mb-md-0" src="http://3771v91rpq8340a0bn4375oi.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/Armstrong_HS-630Cat-0427.jpg" alt="" width="500px" height="450px" />
              </a>
            </div>
            <div class="bg-dark shadow-sm mx-auto"></div>
          </div>
          <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white ">
            <div class="my-3 py-3">
              <h2 class="display-5">Large Scale Installations</h2>
              <p class="lead">We have the expert knowledge to make your large scale project stand out.</p>
              <a>
                <img className="img-fluid mb-3 mb-md-0" src="https://www.cleanenergyprojectbuilder.org/sites/default/files/Pax%20Christi%20image.png" alt="" width="500px" height="350px"/>
              </a>
            </div>
            <div class="bg-light shadow-sm mx-auto" ></div>
          </div>
        </div>
        <hr/>

        <div>
          <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white ">
            <div class="my-3 py-3">
              <h2 class="display-5">Community Solar Garden Subscriptions</h2>
              <p class="lead">Learn more about Community Solar Gardens. Subscriptions disregard if you own the property or rent it. A great option for anyone.</p>
              <a>
                <img className="img-fluid mb-3 mb-md-0" src="https://cooperativeenergyfutures.files.wordpress.com/2017/06/solar-field.jpg" alt="" width="700px" height="350px"/>
              </a>
            </div>
            
          </div>
          </div>
    </div>
  </section>
  {/* <!-- End Services Section --> */}
    </article>
)
    }
}

export default Solutions;