import React from 'react';
import './CreatedService.css';

const createdService = props => {
    return (
        <div className="creationModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Sukurta nauja paslauga</h5>
                        <button onClick={props.hide} id='createdServiceCloseButton' className="close"
                                data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img style={{width: '80px'}} src={props.picture} alt='service_picture'/>
                        <p>Pavadinimas: <strong>{props.name}</strong></p>
                        <p>Kategorija: <strong>{props.category}</strong></p>
                        <p>Kaina: <strong>{props.price}</strong></p>
                        <p>Aprašymas: <strong>{props.description}</strong></p>
                        <div>{props.children}</div>
                    </div>
                    <div className="modal-footer">
                        <button id='createdServiceEditButton' onClick={props.edit} type="button"
                                className="btn btn-primary">Redaguoti
                        </button>
                        <button id='createdServiceBackButton' onClick={props.back} className="btn btn-secondary"
                                data-dismiss="modal">Grįžti į sąrašą
                        </button>
                    </div>
                </div>
            </div>
        </div>)
};

export default createdService;
