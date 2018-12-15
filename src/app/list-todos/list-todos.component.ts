import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: "Learn to dance" },
    { id: 2, description: "Become expert in angular" },
    { id: 3, description: "Go to vacation in amsterdam" },
    { id: 4, description: "Why not to visit paris while visiting amsterdam" }];
  constructor() { }

  ngOnInit() {
  }

}
