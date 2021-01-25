import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  myVar=true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: HomeService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.mainService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/home']);
      this.myVar=false;
    }, 
    // () => {
    //   this.invalidLogin = true;
    //   this.loginSuccess = false;
    // }
    );      
  }

}
