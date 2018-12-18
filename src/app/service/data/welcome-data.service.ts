import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private client: HttpClient) { }

  executeHelloWorldBeanService() {
    console.log("Executing hello world bean service");
    return this.client.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
}
