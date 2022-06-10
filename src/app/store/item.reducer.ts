import * as actions from './item.actions'
import { Action, createReducer, on } from '@ngrx/store';
import * as constants from "../constants"
import { Status } from '../model/status.model';
import { User } from '../model/user.model'

export interface typeStore {
    isLoading: boolean;
    listStatus?: Status[];
    // listUsers?: User[];
    // error?: String
}

export const initialState: typeStore = {
    isLoading: false,
    listStatus: [],
    // listUsers: [],
    // error: ""
}

// export function ItemReducer(state: typeStore = initialState, action: actions.ItemAction) : typeStore {
//     switch (action.type) {
//         case constants.GET_STATUS_REQUEST:
//         case constants.ADD_STATUS_REQUEST:
//             console.log(action, "alô");

//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         case constants.GET_STATUS_SUCCESS:
//             console.log(action.payload, "success");

//             return {
//                 ...state,
//                 isLoading: false,
//                 listStatus: action.payload
//             }
//         case constants.GET_STATUS_FAIL:
//         case constants.ADD_STATUS_FAIL:
//             return {
//                 ...state,
//                 isLoading: false,
//                 error: action.error
//             }
//         default:
//             return state
//     }
// }

const Reducer = createReducer(
    initialState,
    on(actions.getStatusSuccess, (state, action) => {
        console.log("aloooooooooooooooooooooooooo", state, action);
        return {
            ...state,
            listStatus: action.payload
        };
    })
)

export function ItemReducer(state: any, action: Action) {
    return Reducer(state, action)
}