/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

describe('Component: Todo', () => {
  it('should create an instance', () => {
    let component = new TodoComponent();
    expect(component).toBeTruthy();
  });
});
