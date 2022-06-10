import { CoreModule } from './store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { ItemEffects } from './store/item.effects';
import { reducerItem } from './index.reducer';
// import { Reducer } from './store/item.reducer';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ItemEffects]),
    StoreModule.forRoot(reducerItem),
    // StoreModule.forFeature('item', Reducer),
    CoreModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
