import * as actionTypes from './actionTypes'
import axios from 'axios'

export const objectCreationSuccess = objectData => {
    return {
        type: actionTypes.OBJECT_CREATION_SUCCESS,
        formData: objectData
    }
};
export const objectCreationFail = error => {
    return {
        type: actionTypes.OBJECT_CREATION_FAIL,
        error: error
    }
};
export const objectCreationStart = () => {
    return {
        type: actionTypes.OBJECT_CREATION_START
    }
};

export const objectCreation = (url, formData) => {
    return dispatch => {
        dispatch(objectCreationStart());
        axios.post(url, formData)
            .then(response => {
                dispatch(objectCreationSuccess({...formData, id: response.data}));
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    dispatch(objectCreationFail('Tinklo klaida'));
                } else {
                    dispatch(objectCreationFail(error.message))
                }
            })

    }
};

export const objectUpdate = (url, formData) => {
    return dispatch => {
        dispatch(objectCreationStart());
        axios.put(url, formData)
            .then(() => {
                dispatch(objectCreationSuccess(formData));
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    dispatch(objectCreationFail('Tinklo klaida'));
                } else {
                    dispatch(objectCreationFail(error.message))
                }
            })
    }
};

export const creationInit = () => {
    return {
        type: actionTypes.OBJECT_CREATION_INIT
    }
};
