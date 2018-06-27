import React from 'react';

const serviceCard = props => (
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="thumbnail" id="thumbnail">
            <div className="caption">
                <h3>Order</h3>
                <p>{props.description}</p>
                <p>{props.category}</p>
                <p>
                    <button className="btn btn-danger" onClick={props.click}>Details</button>
                </p>
            </div>
        </div>
    </div>
);

export default serviceCard;
