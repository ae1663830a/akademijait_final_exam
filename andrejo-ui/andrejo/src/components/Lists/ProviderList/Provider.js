import React from 'react';

const Provider = props => (
    <tr id='provider'>
        <td id='providerName'>{props.firstName}</td>
        <td id='providerType'>{props.lastName}</td>
        <td id='providerCode'>{props.milkAlergy}</td>
        <td id='providerCity'>{props.nutsAlergy}</td>
        <td id='providerRating'>{props.drinkAlcohol}</td>
        <td><button className="btn btn-success" onClick={props.details}>Detaliau</button></td>
    </tr>
);

export default Provider;
