import { Component, OnInit } from '@angular/core';
// Future
// -No navigation Menu and Footer
// -No Security for menus
// -Hardcoded logic in TodoList and Login Component
// -Remaining Functionality- Edit, Delete, Add
// -Spring Boot
// -Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
   todos = [
     new Todo(1, 'Learn Spring', false, new Date()),
     new Todo(2, 'Learn Angular', false, new Date()),
     new Todo(3, 'Learn Microservices', false, new Date())
    // { id : 1, description : 'Learn Spring'},
    // { id : 2, description : 'Learn Angular'},
    // { id : 3, description : 'Learn Microservices'}
   ];

  todo = {
    id : 1,
    description : 'Learn Spring'
  };

  constructor() { }

  ngOnInit() {
  }

}
