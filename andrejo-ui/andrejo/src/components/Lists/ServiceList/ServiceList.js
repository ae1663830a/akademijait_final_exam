import React from 'react';
import ServiceCard from "./ServiceCard";

const serviceList = props => {
    const services = props.serviceList;
    const listItems = services.map((service, index) =>
        <ServiceCard
            key={service.name}
            name={service.name}
            description={service.description}
            price={service.price}
            picture={service.picture}
            category={service.category}
            click={() => props.clicked(index)}
        />
    );
    return (
        <div className="row">
            {listItems}
        </div>
    )
};

export default serviceList;
