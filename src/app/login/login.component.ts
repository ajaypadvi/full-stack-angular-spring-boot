import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome page on successful authentication of user
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
