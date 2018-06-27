import React from 'react';

const serviceDetails = props => (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="thumbnail" id="thumbnail">
            <img src={props.picture} id="serviceCard" alt="Service_card_picture"/>
            <div className="caption">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.category}</p>
                <p>{props.price} &euro;</p>
                <p>
                    <button className="btn btn-danger" onClick={props.edit}>Redaguoti</button>
                </p>
            </div>
        </div>
    </div>
);

export default serviceDetails;
