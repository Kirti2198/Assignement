import express, { Application } from 'express';
class App {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }

  start(port: string | number = 3000) {
    return this.application.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`listening on port ${port}`);
    });
  }

  getApplication() {
    return this.application;
  }

  private setupGlobalMiddleware() {
    this.application.use(express.json());
  }

  private setupRouters() {
    this.application.get('/', (_, res) => {
      res.json({ message: 'Welcome to our service!' });
    });

    // Setup our router later
  }
}

export default new App();
