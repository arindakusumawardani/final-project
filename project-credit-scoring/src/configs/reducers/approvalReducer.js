import {SAVE_APPROVAL, SAVE_APPROVAL_FAILURE, SAVE_APPROVAL_SUCCESS} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const saveApprovalReducer = (state = { ...initialState}, action) => {
    switch (action.type) {
        case SAVE_APPROVAL:
            return{
                ...state,
                data: null,
                isLoading: true
            };
        case SAVE_APPROVAL_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case SAVE_APPROVAL_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                data: null,
                isLoading: false,
                error: null
            }
    }
}