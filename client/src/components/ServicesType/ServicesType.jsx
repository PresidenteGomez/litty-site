import React, {} from 'react';


const ServicesType = props =>  (
<div>
        <div className="row">
            <div className="col-md-5">
                <a>
                    <img className="img-fluid rounded mb-3 mb-md-0" src={props.img} alt="" />
                </a>
            </div>
            <div className="col-md-7">
                <h3>{props.title}</h3>
                <p>{props.description}</p>

            </div>

        </div>
        <hr/>
</div>
           
        );

export default ServicesType;
