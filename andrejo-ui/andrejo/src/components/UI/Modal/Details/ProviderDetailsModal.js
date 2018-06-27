import React from 'react';

const providerDetailsModal = (props) => {
    return (
        <div className="creationModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.header}</h5>
                    </div>
                    <div className="modal-body" style={{textAlign: 'left'}}>
                        <p>Pavadinimas: <strong>{props.name}</strong></p>
                        <p>Teikėjo tipas: <strong>{props.providerType}</strong></p>
                        <p>Miestas: <strong>{props.city}</strong></p>
                        <p>Įmonės kodas: <strong>{props.companyCode}</strong></p>
                        <p>Įvertinimas: <strong>{props.rating} </strong></p>
                    </div>
                    <div className="modal-footer">
                        {props.children}
                        <button onClick={props.hide} type="button" className="btn btn-secondary"
                                data-dismiss="modal">Uždaryti
                        </button>
                    </div>
                </div>
            </div>
        </div>)
};

export default providerDetailsModal;
