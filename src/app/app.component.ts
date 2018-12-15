import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>{{title}}</h1><br><h2>{{message}}</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome in 28Minutes!!';
}
