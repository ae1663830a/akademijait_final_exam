import React from "react";
import "./NotFound.css";

const notFound = props =>
    <div className="NotFound">
        <h3>Tokio puslapio nėra!</h3>
        <button className='btn btn-lg btn-primary' onClick={() => props.history.replace('/')}>
            Grįžti į pagrindinį puslapį
        </button>
    </div>;

export default notFound;
