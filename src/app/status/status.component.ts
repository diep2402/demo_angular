import { Component, OnInit } from '@angular/core';
import * as actions from '../store/item.actions'
import { Store, select } from '@ngrx/store';
import { User } from '../model/user.model';
import { Status } from '../model/status.model';
import { Observable } from 'rxjs';
import { listStatus } from '../store/item.selector'
import { AppState } from '../app.state'
import { typeStore } from '../store/item.reducer';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  // list: any;

  // articles$: Observable<typeStore>;
  list: any;


  constructor(private store: Store<AppState>) {


  }

  ngOnInit(): void {
    console.log("bắt đầu call API");
    this.store.dispatch(actions.getStatusRequest())
    this.list = this.store.select(listStatus)
    
    
    
  }

  handleClick() {
    // console.log('đã có dữ liệu về');

    // console.log(this.list, 'store nè');
    // console.log(this.store.select(listStatus));

  }
}
