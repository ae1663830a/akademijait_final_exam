import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchOthersSuccess = (otherList, totalPages, totalElements, pageSize, pageNumber) => {
    return {
        type: actionTypes.FETCH_OTHERS_SUCCESS,
        otherList: otherList,
        totalPages: totalPages,
        totalElements: totalElements,
        pageSize: pageSize,
        pageNumber: pageNumber
    }
};
export const fetchOthersFail = error => {
    return {
        type: actionTypes.FETCH_OTHERS_FAIL,
        error: error
    }
};
export const fetchOthersStart = () => {
    return {
        type: actionTypes.FETCH_OTHERS_START
    }
};
export const fetchOthersInit = () => {
    return {
        type: actionTypes.FETCH_OTHERS_INIT
    }
};

// Fetch others initially with loading state
export const fetchOthers = (url, pageSize) => {
    return dispatch => {
        // const sort = '?sort=name%2Casc';
        axios.get(url, {params: {'size': pageSize}})
            .then(response => {
                const getOthers = response.data.content;
                const totalPages = response.data.totalPages;
                const totalElements = response.data.totalElements;
                const pageSize = response.data.size;
                const pageNumber = response.data.number;
                dispatch(fetchOthersSuccess(getOthers, totalPages, totalElements, pageSize, pageNumber));
            }).catch(error => {
            if (error.message === 'Network Error') {
                dispatch(fetchOthersFail('Tinklo klaida'));
            } else {
                dispatch(fetchOthersFail(error.message))
            }
        })
    }
};
