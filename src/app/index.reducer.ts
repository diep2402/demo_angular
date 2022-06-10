import { Action, ActionReducerMap } from '@ngrx/store'
import { ItemReducer } from './store/item.reducer'
import { typeStore } from './store/item.state'

interface ItemState {
    item: typeStore
}

export const reducerItem: ActionReducerMap<ItemState> = {
    item: ItemReducer
}


