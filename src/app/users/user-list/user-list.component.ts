import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/models/IUser';
import { UsersService } from '../users.service';
import { first} from 'rxjs/operators'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
// users: IUser[] = [
//   {
//     userId : 1,
//     firstName : 'Udith',
//     lastName : 'Jayasinghe',
//     email : 'u@b.com',
//     dateofBirth : '1997-04-12',
//     userType : 1

//   },
//   {
//     userId : 2,
//     firstName : 'Udith22',
//     lastName : 'Jayasinghe22',
//     email : 'u@b22.com',
//     dateofBirth : '1997-04-12',
//     userType : 2

//   }
// ];

users : any = [];
//usersSubscription$  : Subscription|undefined

constructor(private userService: UsersService) { }
  // ngOnDestroy(): void {
  //   this.usersSubscription$?.unsubscribe();
  // }

  // ngOnInit() {
  //   this.usersSubscription$ = this.userService.getUsers().subscribe(o => this.users = o);
  // }
ngOnInit(){
  this.userService.getUsers().pipe(first()).subscribe(o => this.users = o);
}
}
