import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StatusComponent } from './status/status.component';
const routes: Routes = [

  
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StatusRoutingModule { }
