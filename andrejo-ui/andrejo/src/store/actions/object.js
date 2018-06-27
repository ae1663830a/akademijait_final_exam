import * as actionTypes from './actionTypes'
import axios from 'axios'


export const fetchObjectSuccess = objectById => {
    return {
        type: actionTypes.FETCH_OBJECT_SUCCESS,
        objectById: objectById,
    }
};
export const fetchObjectFail = error => {
    return {
        type: actionTypes.FETCH_OBJECT_FAIL,
        error: error
    }
};
export const fetchObjectStart = () => {
    return {
        type: actionTypes.FETCH_OBJECT_START
    }
};

export const fetchObject = url => {
    return dispatch => {
        dispatch(fetchObjectStart());
        axios.get(url)
            .then(response => {
                const getObject = response.data;
                dispatch(fetchObjectSuccess(getObject));
            }).catch(error => {
            if (error.message === 'Network Error') {
                dispatch(fetchObjectFail('Tinklo klaida'));
            } else {
                dispatch(fetchObjectFail(error.message))
            }
        })
    }
};
export const fetchObjectInit = () => {
    return {
        type: actionTypes.FETCH_OBJECT_INIT
    }
};
