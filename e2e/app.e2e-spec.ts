import { BillingappPage } from './app.po';

describe('billingapp App', function() {
  let page: BillingappPage;

  beforeEach(() => {
    page = new BillingappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
