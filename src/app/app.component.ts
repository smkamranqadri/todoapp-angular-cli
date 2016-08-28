import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'Angular 2 - Todo App with Angular Cli @ Webpack';
}
