import app from '../app';
describe('App', () => {
  test('should server runs on port', async () => {
    await expect(app.start(3000)).toBe('listening on port 3000');
  });
});
