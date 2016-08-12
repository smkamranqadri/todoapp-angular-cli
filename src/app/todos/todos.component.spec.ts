/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

describe('Component: Todos', () => {
  it('should create an instance', () => {
    let component = new TodosComponent();
    expect(component).toBeTruthy();
  });
});
