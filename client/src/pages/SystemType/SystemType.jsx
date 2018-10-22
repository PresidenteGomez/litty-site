import React, { Component } from 'react';

class SystemType extends Component {
    render () {
return (
    <section class="parallax-systems" class="bg-light" id="types">
        <div class="container">
            <div class="content-section-heading">
                <h2 class="text-secondary mb-0">Types of Solar Systems</h2>
                <p class="lead mb-5">Chances are there's a type of system for your particular needs. Here are some of the solar systems that Litty Solar
                  can help you with:
        </p>

            </div>

            <div class="card-deck">
                {/* <!-- card 1: Direct System --> */}
        <div class="card">
                    <img class="card-img-top" src="https://images.pexels.com/photos/411592/pexels-photo-411592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        width="450" height="180" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Direct System</h5>
                            <p class="card-text">The most simple of all the systems. They are made up of two components: a photovoltaic module and a D.C. load.</p>
                            <p class="card-text">
                                <small>The power produced is transferred directly to a load (device) without being converted into AC electricity.
              </small>
                            </p>

                        </div>
                        <div class="card-footer bg-transparent">
                            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#direct-pros">
                                Advantages
            </button>

                            <button type="button" class="btn btn-warning btn-block" data-toggle="modal" data-target="#direct-cons">
                                Limitations
            </button>

                            {/* <!-- Modal 1 --> */}
            <div class="modal fade" id="direct-pros" tabindex="-1" role="dialog" aria-labelledby="direct-pros" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="direct-pros">Direct System Advantages</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            These types of systems can be used for small scale applications. Most notably they are all around us. From calculators to
                                            watches. Applications that they can be used for are water pumps, heat pumps, and exhaust fans (attic).
                  </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal 2 --> */}
            <div class="modal fade" id="direct-cons" tabindex="-1" role="dialog" aria-labelledby="direct-cons" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="direct-cons">Direct System Limitations</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Because they are not integrated with batteries, the load to which is using the power will only be able to draw electricity
                                            when the light shines on the photovoltaic module. This would in essence diminish further practical applications
                                            of a Direct System when the sun's not shining.
                  </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end modal --> */}
          </div>
        </div>
                    {/* <!-- end card 1: Direct System --> */}
        {/* <!-- card 2: Utility Interactive--> */}
        <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?cs=srgb&dl=alternative-alternative-energy-clean-energy-421888.jpg&fm=jpg"
                            width="450" height="180" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Utility Interactive</h5>
                                <p class="card-text">These systems produce power and convert DC into AC electricity. It is comprised of a PV array, inverter, service
                                  panel, disconnects, utility interconnection contract, and additional components that a utility may require.
            </p>
                                <p class="card-text">
                                    <small>It allow owners to send back excess electricity to the grid for others in the line to use. The system can be
                                      used in a variety of properties: homes, businesses, and community solar gardens, to name a few.
              </small>
                                </p>
                            </div>
                            <div class="card-footer bg-transparent">
                                {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#utility-pros">
                                    Advantages
            </button>

                                <button type="button" class="btn btn-warning btn-block" data-toggle="modal" data-target="#utility-cons">
                                    Limitations
            </button>

                                {/* <!-- Modal 1 --> */}
            <div class="modal fade" id="utility-pros" tabindex="-1" role="dialog" aria-labelledby="utility-pros" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="utility-pros">Utility Interactive System Advantages</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Net-metering laws in the U.S. allow for the generation of power with a distributed source, such as a
                                                  solar system that connects in the service panel of the building. Hence, if you produce more electricity
                                                  that you consume your electric meter will "spin" backwards and will reduce your kilowatt hours for
                                                  which are billed by your electric company.
                    </p>
                                                <p>
                                                    If you use more energy than what the PV system produces, you are connected to the grid and you will not have a problem when
                                                    the sun's not shining.
                    </p>
                                                <p>
                                                    A less expensive option if no batteries are included.
                    </p>
                                                <p>
                                                    These types of systems will have the least amount of maintenance, besides the Direct System.
                              
                    </p>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Modal 2 --> */}
            <div class="modal fade" id="utility-cons" tabindex="-1" role="dialog" aria-labelledby="utility-cons" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="utility-cons">Utility Interactive System Limitations</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                There is no back-up power source in this system type. Hence, if the utility system is down, you won't have any power.
                  </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end modal --> */}
          </div>
        </div>
                        {/* <!-- end card 2: Utility Interactive --> */}
                
        {/* <!-- card 3: Multi Mode --> */}
        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?cs=srgb&dl=alternative-energy-building-clouds-356036.jpg&fm=jpg"
                                width="450" height="180" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Multimode</h5>
                                    <p class="card-text">This system is identical to the Utility Connected with the addition of a back-up power supply in the form of
                                      batteries.
            </p>
                                    <p class="card-text">
                                        <small>
                                        </small>
                                    </p>
                                </div>
                                <div class="card-footer bg-transparent">
                                    {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#multi-pros">
                                        Advantages
            </button>

                                    <button type="button" class="btn btn-warning btn-block" data-toggle="modal" data-target="#multi-cons">
                                        Limitations
            </button>

                                    {/* <!-- Modal 1 --> */}
            <div class="modal fade" id="multi-pros" tabindex="-1" role="dialog" aria-labelledby="multi-pros" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="multi-pros">Multimode System Advantages</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>
                                                        You can store "excess" electricity generated by your system through credits on your utilities company.
                    </p>
                                                    <p>
                                                        Electricity can be collected and used if the utility grid is down thanks to batteries.
                    </p>
                                                    <p>
                                                        If the owner would want to, they can operate this system as a Stand-Alone system.
                    </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Modal 2 --> */}
            <div class="modal fade" id="multi-cons" tabindex="-1" role="dialog" aria-labelledby="multi-cons" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="multi-cons">Multimode System Limitations</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>
                                                        With the addition of batteries, more maintenance and precautions would need to be taken into consideration.
                    </p>
                                                    <p>
                                                        This system will be higher in price than a Utility Interactive system without batteries.
                    </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end modal --> */}
          </div>
        </div>
                            {/* <!-- end card 3: Multi Mode --> */}
        {/* <!-- card 4: Stand Alone--> */}
        <div class="card">
                                <img class="card-img-top" src="https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?cs=srgb&dl=300-sl-alternative-energy-blue-sky-371900.jpg&fm=jpg"
                                    width="450" height="180" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Stand Alone</h5>
                                        <p class="card-text">These systems are self-contained. They are not connected to the grid. They are made up of PV arrays, charge controllers,
              batteries, inverters, disconnects, and data monitoring equipment.</p>
                                        <p class="card-text">
                                            <small>Some of these systems can have back-up power generation from Diesel or Wind generators.
              </small>
                                        </p>
                                    </div>
                                    <div class="card-footer bg-transparent">
                                        {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#alone-pros">
                                            Advantages
            </button>

                                        <button type="button" class="btn btn-warning btn-block" data-toggle="modal" data-target="#alone-cons">
                                            Limitations
            </button>

                                        {/* <!-- Modal 1 --> */}
            <div class="modal fade" id="alone-pros" tabindex="-1" role="dialog" aria-labelledby="alone-pros" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="alone-pros">Stand Alone System Advantages</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>
                                                            With this system you will truly be independent from an electric utility company. You will also have the benefit of obtaining
                                                            all of your energy from a renewable source.
                                      
                    </p>
                                                        <p>
                                                            This is a really good alternative than bringing the electric grid into a remote area.
                    </p>
                                                        <p>
                                                            This type of system provides remote power generation. This comes very handy in the cases of disaster relief or for those
                                                            that live in rural areas.
                    </p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Modal 2 --> */}
            <div class="modal fade" id="alone-cons" tabindex="-1" role="dialog" aria-labelledby="alone-cons" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="alone-cons">Stand Alone System Limitations</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <p>
                                                            The owner will need to be prepared for unforeseen less-than adequate sunshine using this system. You will need to have plenty
                                                            of energy storage (batteries) and back-up energy generation.
                    </p>
                                                        <p>
                                                            Batteries are a large part of this system and to ensure its success you need to be vigilant on battery maintenance.
                                      
                    </p>
                                                        <p>
                                                            Due to the high price of batteries, this system can be costly, however, if you live in areas where there is no power, it
                                                            will be less expensive than having a utility company bring the "grid" into your area.
                                      
                    </p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end modal --> */}
          </div>
                                    {/* <!-- end of card footer --> */}
        </div>
                                {/* <!-- end card 4: Stand Alone --> */}
      </div>
                            {/* <!-- end of card deck --> */}
    </div>
                        {/* <!-- end of container --> */}
  </section>
)
    }
}




















export default SystemType;