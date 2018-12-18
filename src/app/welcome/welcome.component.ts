import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  message: string = 'Some Welcome Message';
  welcomeMessageFromServer = '';
  errorResponseFromServer = '';
  name = '';

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageUsingPathParameter() {
    this.service.executeHelloWorldBeanServiceWithPathParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromServer = response.message;
  }

  handleErrorResponse(error) {
    this.errorResponseFromServer = error.error.message;
  }
}
