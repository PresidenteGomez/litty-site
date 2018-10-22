import React, { Component } from 'react';
import ServicesType from '../../components/ServicesType';


class Services extends Component {
    render () {
return (
    <article>
  {/* <!-- Services --></div> */}
  <section className="content-section bg-primary" id="services">
            <div className="container">
                <div className="content-section-heading">
                    <h2 className="text-secondary mb-0">Services</h2>
                    <p className="lead mb-5">Our services consist of installing and maintaining solar panels. We will go through an extremely thorough solar system
          design process and will present to you the best options available.

        </p>
                    <p className="lead mb-5"> Our solar installation process looks something like this:</p>
      </div>
      {/* <!-- power consumption column --> */}
        <ServicesType 
          img="img/power-analysis.png" 
          title="Power Consumption Analysis" 
          description="his is where we analyze everything that draws electricity in your home or business and we make sure it’s the most
            efficient that it can be. If we see opportunities to make your home or business more efficient we will propose
            them to you."
        />

      {/* <!-- End Power Consumption Column --> */}
      <hr/>
      {/* <!-- System Design column --> */}
                <div className="row">
                    <div className="col-md-5">
          <a>
                            <img className="img-fluid rounded mb-3 mb-md-0" src="img/system-design.png" alt=""/>
          </a>
        </div>
                    <div className="col-md-7">
          <h3>System Design</h3>
          <p>Depending on your energy needs we will devise the most appropriate solar system for you. Everyone has different
            needs and we will make sure your panels are set for max output. We will also go through a rigorous placement
            analysis throughout all of your property. This way you understand the different options to maximize your energy
            generation.
          </p>
        </div>
      </div>
      {/* <!-- End System Design column --> */}
      <hr/>
      {/* <!-- Incentives, Tax-Credits, Rebates, Loans--> */}
                <div className="row">
                    <div className="col-md-5">
          <a>
                            <img className="img-fluid rounded mb-3 mb-md-0" src="img/solar-money.png" alt=""/>
          </a>
        </div>
                    <div className="col-md-7">
          <h3>Incentives, Tax-Credits, Rebates, Loans</h3>
          <p>Litty Solar will make sure that you know and take advantage of Local, State, and Federal incentives. We will also
            identify every available tax-credit and any rebates that can be geared towards your new solar system. Litty Solar
            also understands that this is a large financial undertaking, that will absolutely pay-off in the near future,
            and will point you in the right direction of loans or community financing organizations, if needed.
          </p>
        </div>
      </div>
      {/* <!-- End Incentives, Tax-Credits, Rebates, Loans--> */}
      <hr/>
      {/* <!-- Installation--> */}
                <div className="row">
                    <div className="col-md-5">
          <a>
                            <img className="img-fluid rounded mb-3 mb-md-0" src="img/solar-installation.png" alt=""/>
          </a>
        </div>
                    <div className="col-md-7">
          <h3>Installation</h3>
          <p>Litty Solar goes through a rigorous onboarding process to make sure that our Solar Specialists are extremely knowledgeable.
            We will always make sure to go beyond expectations and ensure you have the best interactions and customer experience
            with our Solar Specialists.
          </p>
        </div>
      </div>
      {/* <!--End Installation--> */}
      <hr/>
      {/* <!--Post-Installation Tests--> */}
                <div className="row">
                    <div className="col-md-5">
          <a>
                            <img className="img-fluid rounded mb-3 mb-md-0" src="img/installation-tests.png" alt=""/>
          </a>
        </div>
                    <div className="col-md-7">
          <h3>Post-Installation Tests</h3>
          <p>We have internal metrics that every installation must pass and will test your newly installed solar system accordingly.
            Depending on the test results we will either go back and fine-tune the installation or leave it as complete.
            Our goal is to make this process as easy as possible for you.
          </p>
        </div>
      </div>
      {/* <!--End Post-Installation Tests--> */}
    </div>
  </section>
  {/* <!-- End Services Section --> */}
    </article>
)
    }
}




















export default Services;