import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  constructor(private fb: FormBuilder, private toastrService: ToastrService,private router:Router) { }
  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
  })
  ngOnInit(): void {
   if(localStorage.getItem('userName')){
    this.router.navigate(['dashboard']);
   }
  }

  onSubmitData() {
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('userName',this.loginForm.controls.userName.value);
      this.toastrService.success( 'Success Message!','Login Successful');
      this.router.navigate(['dashboard']);
      return true;
    } else {
      this.toastrService.error( 'Error Message!','Login Failed!');
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
