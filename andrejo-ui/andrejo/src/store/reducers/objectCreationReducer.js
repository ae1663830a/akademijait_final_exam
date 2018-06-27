import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    formData: null,
    created: false,
    error: null
};

const objectCreationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OBJECT_CREATION_SUCCESS:
            return {...state, loading: false, created: true, formData: action.formData, error: null};
        case actionTypes.OBJECT_CREATION_FAIL:
            return {...state, loading: false, created: false, error: action.error, formData: null};
        case actionTypes.OBJECT_CREATION_INIT:
            return {...state, created: false, error: null, formData: null};
        case actionTypes.OBJECT_CREATION_START:
            return {...state, loading: true, error: null, formData: null};
        default:
            return state;
    }
};

export default objectCreationReducer;
