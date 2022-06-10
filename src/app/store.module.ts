import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { Reducer } from './store/item.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/item.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    // StoreModule.forFeature('item', Reducer),
    EffectsModule.forFeature([ItemEffects]),
    HttpClientModule

  ]
})
export class CoreModule { }