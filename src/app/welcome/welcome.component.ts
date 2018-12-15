import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string = 'Some Welcome Message';

  constructor() { }

  ngOnInit() {
    //this.message = 5; //This will give us the compilation error bec
    console.log(this.message);
  }

}
