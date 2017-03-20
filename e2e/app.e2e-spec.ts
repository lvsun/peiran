import { Peiran.IoPage } from './app.po';

describe('peiran.io App', () => {
  let page: Peiran.IoPage;

  beforeEach(() => {
    page = new Peiran.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
