import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(user: string, password: string) {
    if (user === 'ajay' && password === 'password') {
      return true;
    }
    return false;
  }
}
