import { TodoAngularCliPage } from './app.po';

describe('todo-angular-cli App', function() {
  let page: TodoAngularCliPage;

  beforeEach(() => {
    page = new TodoAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
