import { SampleAppPage } from './app.po';

describe('sample-app App', () => {
  let page: SampleAppPage;

  beforeEach(() => {
    page = new SampleAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
