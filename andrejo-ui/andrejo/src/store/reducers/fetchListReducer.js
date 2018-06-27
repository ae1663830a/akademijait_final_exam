import * as actionTypes from '../actions/actionTypes'

const initialState = {
    objectList: [],
    loading: false,
    error: null,
    totalPages: null,
    totalElements: null,
    pageSize: null,
    pageNumber: 0
};

const fetchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LIST_SUCCESS:
            return {
                ...state, objectList: action.objectList, totalPages: action.totalPages,
                totalElements: action.totalElements, pageSize: action.pageSize,
                pageNumber: action.pageNumber, loading: false, error: null
            };
        case actionTypes.FETCH_LIST_FAIL:
            return {...state, loading: false, error: action.error};
        case actionTypes.FETCH_LIST_START:
            return {...state, loading: true};
        case actionTypes.FETCH_LIST_INIT:
            return {...state, error: null, objectList: null};
        default:
            return state;
    }
};

export default fetchListReducer;
