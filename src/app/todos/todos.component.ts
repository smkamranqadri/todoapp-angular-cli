import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Array<string> = ['Test'];
  todo: string;
  currentTodoIndex: number = null;
  showUpdate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todos.push(this.todo);
    this.todo = '';
  }

  editTodo(index: number) {
    this.currentTodoIndex = index;
    this.showUpdate = true;
    this.todo = this.todos[index];
  }

  updateTodo() {
    this.todos[this.currentTodoIndex] = this.todo;
    this.currentTodoIndex = null;
    this.showUpdate = false;
    this.todo = '';
  }

  // deleteTodo(todo: string) {
  deleteTodo(index: number) {
    // let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
