import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<string> = [];
  currentTodoIndex: number = null;

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo: HTMLInputElement) {
    this.todos.push(todo.value);
    todo.value = '';
  }

  editTodo(index: number) {
    this.currentTodoIndex = index;
    let todoElement: HTMLInputElement = <HTMLInputElement>document.getElementById('todo');
    todoElement.value = this.todos[index];
  }

  updateTodo(todo: HTMLInputElement) {
    this.todos[this.currentTodoIndex] = todo.value;
    todo.value = '';
  }

  // deleteTodo(todo: string) {
  deleteTodo(index: number) {
    // let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
