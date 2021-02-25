import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'




@NgModule({
  declarations: [UserSignupComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    UserSignupComponent
  ]
})
export class UsersModule { }
