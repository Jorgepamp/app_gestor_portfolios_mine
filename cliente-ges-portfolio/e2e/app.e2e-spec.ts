import { ClienteGesPortfolioPage } from './app.po';

describe('cliente-ges-portfolio App', function() {
  let page: ClienteGesPortfolioPage;

  beforeEach(() => {
    page = new ClienteGesPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
