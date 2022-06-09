import { Component, OnInit } from '@angular/core';
import * as actions from '../store/item.actions'
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import { Status } from '../model/status.model';
import { Observable } from 'rxjs';
import { listStatus } from '../store/item.selector'


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  list !: any;

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(actions.getStatusRequest())
    this.list = this.store.select(listStatus)
    console.log(this.store);

  }

  handleClick(){
    console.log(this.list);
    
  }
}
