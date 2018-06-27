import React from 'react';

const successModal = (props) => {
    return (
        <div className="creationModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.modalHeader}</h5>
                        <button onClick={props.hide} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>{props.modalMessage}</div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.hide} type="button" className="btn btn-secondary" data-dismiss="modal">Uždaryti</button>
                    </div>
                </div>
            </div>
        </div> )
};

export default successModal;
