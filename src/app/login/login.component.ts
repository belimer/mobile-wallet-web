import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // form: any = {
  //   employeeId: null,
  //   password: null
  // };

  employeeId: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
 
  isLoggedIn = false;
  isLoginFailed = false;
  // errorMessage = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
 
    
  }
  // signIn(): void {}
  onSubmit(form:NgForm): void {
  console.log("first");
    this._authService.login(form.value.employeeId,form.value.password).subscribe(data => {
      console.log("two");
      if(data === "OK") {
        alert("Wow");
        const route = "/customers";
        this._router.navigate([route]);
        
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

}
