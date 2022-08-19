import app from '../app';
describe('App', () => {
  test('should server runs on port', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(async () => await app.start(3000));
  });
});
