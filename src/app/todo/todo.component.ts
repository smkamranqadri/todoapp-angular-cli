import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() task: string = '';
  @Input() index: number = 0;
  @Output('edit') editTodoEventEmitter: EventEmitter<number> = new EventEmitter();
  // @Output('delete') deleteTodoEventEmitter: EventEmitter<string> = new EventEmitter();
  @Output('delete') deleteTodoEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editTodo(index: number) {
    // this.deleteTodoEventEmitter.next(task);
    this.editTodoEventEmitter.next(index);
  }

  // deleteTodo(task: string) {
  deleteTodo(index: number) {
    // this.deleteTodoEventEmitter.next(task);
    this.deleteTodoEventEmitter.next(index);
  }

}
