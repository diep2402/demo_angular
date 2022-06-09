import * as actions from './item.actions'
import { createReducer, on } from '@ngrx/store';
import { typeStore } from './item.state';
import * as constants from "../constants"

export const initialState: typeStore = {
    isLoading: false,
    listStatus: [],
    listUsers: [],
    error: ""
}

export function ItemReducer(state: typeStore = initialState, action: actions.ItemAction) : typeStore {
    switch (action.type) {
        case constants.GET_STATUS_REQUEST:
        case constants.ADD_STATUS_REQUEST:
            console.log(action, "alô");
            
            return {
                ...state,
                isLoading: true,
            }
        case constants.GET_STATUS_SUCCESS:
            console.log(action, "success");
            
            return {
                ...state,
                isLoading: false,
                listStatus: action.payload
            }
        case constants.GET_STATUS_FAIL:
        case constants.ADD_STATUS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}