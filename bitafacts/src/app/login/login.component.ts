import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { users, IUser } from './../shared/test-data'
import { UserDetailsService } from './../services/user-details.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  userList: IUser[] = users;
  constructor(private fb: FormBuilder, private toastrService: ToastrService,
    private router: Router,
    private userDetailsService: UserDetailsService
  ) { }
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
  })
  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.router.navigate(['dashboard']);
    }
  }

  onSubmitData() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const user = this.userList.filter(x => x.userName == this.loginForm.controls.userName.value && x.password == this.loginForm.controls.password.value);
      console.log(user);
      if (user.length > 0) {
        const loginBasedUser = this.userList.filter(x => x.role == user[0].role)
        localStorage.setItem('userName', this.loginForm.controls.userName.value);
        this.userDetailsService.setUserListData(loginBasedUser);
        this.toastrService.success('Success Message!', 'Login Successful');
        this.router.navigate(['dashboard']);
        return true;
      } else {
        this.toastrService.warning('Error Message!', 'Please Validate Username and Password!');
        return false;
      }

    } else {
      this.toastrService.error('Error Message!', 'Login Failed!');
      return false;
    }
    console.log(this.loginForm.value);
  }
  onClickReset() {
    localStorage.clear();
    this.submitted = false;
    this.loginForm.reset();
    this.toastrService.success('Form Resetted Successfully', 'Success message!');
  }
}
