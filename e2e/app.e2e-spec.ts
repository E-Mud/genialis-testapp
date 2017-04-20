import { GenialisAppPage } from './app.po';

describe('genialis-app App', () => {
  let page: GenialisAppPage;

  beforeEach(() => {
    page = new GenialisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
