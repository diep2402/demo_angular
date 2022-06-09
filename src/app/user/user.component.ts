import { Component, OnInit } from '@angular/core';
import * as actions from '../store/item.actions'
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
