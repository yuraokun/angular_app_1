import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForList, User } from './interfaces/user-model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserForList[]> {
    return this.http.get('http://localhost:8080/users') as Observable<
      UserForList[]
    >;
  }

  async createUser(userData: User) {
    await this.http
      .post('http://localhost:8080/users/signup', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteUser(id: number) {
    return this.http.post('http://localhost:8080/users/delete', {
      id,
    });
  }
}
