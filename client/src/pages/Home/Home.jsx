import React, { Component } from 'react';


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render () {
return (
    <article>
        <header className="masthead d-flex">
            <div className="container text-center my-auto">
                <h1 className="mb-1">Empowering Communities Forward</h1>
                
    </div>
            <div className="overlay"></div>
        </header>
    </article>
)
    }
}

export default Home;