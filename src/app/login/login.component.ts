import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ajay';
  password = 'password';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log("username >> " + this.username + " , password >> " + this.password);
    if (this.username === 'ajay' && this.password === 'password') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
