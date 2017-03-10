import { Mangular2HnPage } from './app.po';

describe('mangular2-hn App', () => {
  let page: Mangular2HnPage;

  beforeEach(() => {
    page = new Mangular2HnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
