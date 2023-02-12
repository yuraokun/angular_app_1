import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { UserForList, User } from '../interfaces/user-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: UserForList[];
  constructor(private usersService: UsersService, private http: HttpClient) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: UserForList[]) => {
      this.users = res;
    });
  }

  deleteUser(id: number) {
    const answer = confirm(`are you sure to delete User (id: ${id})`);
    if (answer) {
      this.usersService.deleteUser(id).subscribe((res) => {
        console.log(res);
        const targetIndex = this.users.findIndex((user) => user.id === id);
        this.users.splice(targetIndex, 1);
      });
    }
  }
}
