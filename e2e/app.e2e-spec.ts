import { BlumjsDemoPage } from './app.po';

describe('blumjs-demo App', function() {
  let page: BlumjsDemoPage;

  beforeEach(() => {
    page = new BlumjsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
