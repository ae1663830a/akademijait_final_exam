import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchListSuccess = (objectList, totalPages, totalElements, pageSize, pageNumber) => {
    return {
        type: actionTypes.FETCH_LIST_SUCCESS,
        objectList: objectList,
        totalPages: totalPages,
        totalElements: totalElements,
        pageSize: pageSize,
        pageNumber: pageNumber
    }
};
export const fetchListFail = error => {
    return {
        type: actionTypes.FETCH_LIST_FAIL,
        error: error
    }
};
export const fetchListStart = () => {
    return {
        type: actionTypes.FETCH_LIST_START
    }
};
export const fetchListInit = () => {
    return {
        type: actionTypes.FETCH_LIST_INIT
    }
};


// Fetch list initially with loading state
export const fetchList = (url, pageSize) => {
    return dispatch => {
        dispatch(fetchListStart()); // only difference vs changePageFetchList
        axios.get(url, {params: {'size': pageSize}})
            .then(response => {
                const fetchList = response.data.content;
                const totalPages = response.data.totalPages;
                const totalElements = response.data.totalElements; //total count of objects
                const pageSize = response.data.size; // page size
                const pageNumber = response.data.number; // page number
                dispatch(fetchListSuccess(fetchList, totalPages, totalElements, pageSize, pageNumber));
            }).catch(error => {
            if (error.message === 'Network Error') {
                dispatch(fetchListFail('Tinklo klaida'));
            } else {
                dispatch(fetchListFail(error.message))
            }
        })
    }
};
export const changePageFetchList = (url, pageNumber, pageSize) => {
    return dispatch => {
        axios.get(url, {params: {'page': pageNumber, 'size': pageSize}})
            .then(response => {
                const fetchList = response.data.content;
                const totalPages = response.data.totalPages;
                const totalElements = response.data.totalElements;
                const pageSize = response.data.size;
                const pageNumber = response.data.number;
                dispatch(fetchListSuccess(fetchList, totalPages, totalElements, pageSize, pageNumber))
            })
            .catch(error => {
                if (error.message === 'Network Error') {
                    dispatch(fetchListFail('Tinklo klaida'));
                } else {
                    dispatch(fetchListFail(error.message))
                }
            })

    }
};
