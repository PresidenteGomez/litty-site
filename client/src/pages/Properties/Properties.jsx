import React, { Component } from 'react';

class Properties extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (

            <section className="content-section bg-primary" id="properties">
                <div className="container">
                    <div className="content-section-heading">
                        <h2 className="text-secondary mb-0">Property Focus</h2>
                        <p className="lead mb-5">Everyone has a different type of property. These are the ones that we specialize in:
        </p>
                    </div>

                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5e5f5fb0390274713e4a135b74b2678&auto=format&fit=crop&w=2850&q=80"
                                alt="Card image cap" width="450" height="180" />

                            <div className="property-name card-body">
                                <h4 className="card-title">Residential</h4>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1517464852481-002801a489e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8738f9c548f744f75041bc4a6c135151&auto=format&fit=crop&w=3716&q=80"
                                width="450" height="180" alt="Card image cap" />

                            <div className="property-name card-body">
                                <h4 className="card-title"> Commercial</h4>
                            </div>
                        </div>



                        <div className="card">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1431287991645-d6583750a66c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=799c75d1ddfaf337fb8545b499971459&auto=format&fit=crop&w=3906&q=80"
                                width="450" height="180" alt="Card image cap" />
                            <div className="property-name card-body">
                                <h4 className="card-title"> Agricultural</h4>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-0.3.5&s=dbb6e90928f822f2689d1cab407f7351&auto=format&fit=crop&w=2478&q=80"
                                width="450" height="180" alt="Card image cap" />
                            <div className="property-name card-body">
                                <h4 className="card-title"> Governmental</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Properties;