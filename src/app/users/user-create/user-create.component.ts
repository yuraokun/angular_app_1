import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  create() {
    this.usersService.createUser({
      name: this.username,
      email: this.email,
      password: this.password,
    });
  }
}
