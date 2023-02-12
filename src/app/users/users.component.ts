import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: { name: string; email: string }[] = [];
  constructor(private usersService: UsersService, private http: HttpClient) {}

  async ngOnInit() {}
}
