import * as actionTypes from '../actions/actionTypes'

const initialState = {
    otherList: null,
    loading: false,
    error: null,
    totalPages: null,
    totalElements: null,
    pageSize: null,
    pageNumber: 0
};

const otherListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_OTHERS_SUCCESS:
            return {
                ...state, otherList: action.otherList, totalPages: action.totalPages,
                totalElements: action.totalElements, pageSize: action.pageSize,
                pageNumber: action.pageNumber, loading: false, error: null
            };
        case actionTypes.FETCH_OTHERS_FAIL:
            return {...state, loading: false, error: action.error};
        case actionTypes.FETCH_OTHERS_START:
            return {...state, loading: true};
        case actionTypes.FETCH_OTHERS_INIT:
            return {...state, error: null, otherList: null};
        default:
            return state;
    }
};

export default otherListReducer;
