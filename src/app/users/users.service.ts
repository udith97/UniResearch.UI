import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get('https://localhost:44371/api/User');
  }
}
