import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module'
import { UsersService } from './users.service';

export const declareations = [UserDetailsComponent, UserListComponent]


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [declareations],
  providers: [UsersService]
})
export class UsersModule { }
