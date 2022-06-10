import { NgModule } from '@angular/core';
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
