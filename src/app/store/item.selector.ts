import { createFeatureSelector, createSelector } from '@ngrx/store';
import { typeStore } from './item.reducer';

export const featureItem = createFeatureSelector<typeStore>('item');

export const listStatus = createSelector(featureItem, (state) => {
    return state.listStatus
})
// console.log(listStatus, 'listStatus');

export const listUser = createSelector(featureItem, (state:typeStore) => state.listStatus)