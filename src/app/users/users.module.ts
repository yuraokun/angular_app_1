import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UsersComponent, ListComponent, UserCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersService],
  // exports: [UsersComponent, ListComponent],
})
export class UsersModule {}
