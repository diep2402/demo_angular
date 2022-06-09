import { createFeatureSelector, createSelector } from '@ngrx/store';
import { typeStore } from './item.state';

export const featureItem = createFeatureSelector<typeStore>('item');

export const listStatus = createSelector(featureItem, (state) => {
    console.log(state, "aloo day là selector");


})
export const listUser = createSelector(featureItem, (state) => state.listUsers)