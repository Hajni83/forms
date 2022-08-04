import { Observable } from 'rxjs';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  list$:Observable<User[]> = this.userService.getAll();
  
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

}
