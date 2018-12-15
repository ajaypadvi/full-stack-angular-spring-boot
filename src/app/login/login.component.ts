import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  //Depenedncy injection of router
  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  handleLogin() {
    // console.log("username >> " + this.username + " , password >> " + this.password);
    if (this.username === 'ajay' && this.password === 'password') {
      //Redirect to Welcome page on successful authentication of user
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
