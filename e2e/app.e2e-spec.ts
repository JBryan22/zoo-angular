import { ZooAngularPage } from './app.po';

describe('zoo-angular App', function() {
  let page: ZooAngularPage;

  beforeEach(() => {
    page = new ZooAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
