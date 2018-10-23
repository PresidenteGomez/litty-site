import React, { Component } from 'react';
import ServicesType from '../../components/ServicesType';


class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
}
    render () {
return (
    <article>
  {/* <!-- Services --> */}
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
          description="This is where we analyze everything that draws electricity in your home or business and we make sure it’s the most
            efficient that it can be. If we see opportunities to make your home or business more efficient we will propose
            them to you."
        />

      {/* <!-- System Design column --> */}
      <ServicesType 
          img="img/system-design.png" 
          title="System Design" 
          description="Depending on your energy needs we will devise the most appropriate solar system for you. Everyone has different
          needs and we will make sure your panels are set for max output. We will also go through a rigorous placement
          analysis throughout all of your property. This way you understand the different options to maximize your energy
          generation."
        />

      {/* <!-- Incentives, Tax-Credits, Rebates, Loans--> */}
      <ServicesType 
          img="img/solar-money.png" 
          title="Incentives, Tax-Credits, Rebates, Loans" 
          description="Litty Solar will make sure that you know and take advantage of Local, State, and Federal incentives. We will also
          identify every available tax-credit and any rebates that can be geared towards your new solar system. Litty Solar
          also understands that this is a large financial undertaking, that will absolutely pay-off in the near future,
          and will point you in the right direction of loans or community financing organizations, if needed."
        />

      {/* <!-- Installation--> */}
      <ServicesType 
          img="img/solar-installation.png" 
          title="Installation" 
          description="Litty Solar goes through a rigorous onboarding process to make sure that our Solar Specialists are extremely knowledgeable.
          We will always make sure to go beyond expectations and ensure you have the best interactions and customer experience
          with our Solar Specialists."
        />

      {/* <!--Post-Installation Tests--> */}
      <ServicesType 
          img="img/installation-tests.png" 
          title="Post-Installation Tests" 
          description="We have internal metrics that every installation must pass and will test your newly installed solar system accordingly.
          Depending on the test results we will either go back and fine-tune the installation or leave it as complete.
          Our goal is to make this process as easy as possible for you."
        />

    </div>
  </section>
  {/* <!-- End Services Section --> */}
    </article>
)
    }
}

export default Services;