import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private client: HttpClient) { }

  retrieveAllTodos(username) {
    console.log("Retrieving all todos per user from the backend");
    return this.client.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }


  deleteTodo(username, id) {
    console.log("Deleting todo item requested from todo list on user interface {username=" + username + ",id=" + id + "}");
    return this.client.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    console.log("Retrieving specific todo item requested from todo component {username=" + username + ",id=" + id + "}");
    return this.client.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
