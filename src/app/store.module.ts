import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ItemReducer } from './store/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/item.effects';
import {  HttpClientModule  } from '@angular/common/http';


@NgModule({
  imports: [
    StoreModule.forFeature('item', ItemReducer),
    EffectsModule.forFeature([ItemEffects]),
    HttpClientModule
    
  ]
})
export class CoreModule {}