import * as actionTypes from '../actions/actionTypes'

const initialState = {
    objectById: null,
    loading: false,
    error: null,
};

const objectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_OBJECT_SUCCESS:
            return {...state, objectById: action.objectById, loading: false, error: null};
        case actionTypes.FETCH_OBJECT_FAIL:
            return {...state, loading: false, error: action.error, objectById: null};
        case actionTypes.FETCH_OBJECT_START:
            return {...state, loading: true};
        case actionTypes.FETCH_OBJECT_INIT:
            return {...state, error: null, objectById: null};
        default:
            return state;
    }
};

export default objectReducer;
