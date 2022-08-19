import cors from 'cors';
import express, { Application } from 'express';
import usersRoutes from './modules/users/users.router';
class App {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupCors();
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
  private setupCors() {
    this.application.use(
      cors({
        origin: [
          'http://localhost:4000',
          'http://localhost:8080',
          'http://localhost:4200',
        ],
      }),
    );
  }

  private setupGlobalMiddleware() {
    this.application.use(express.json());
  }

  private setupRouters() {
    this.application.get('/', (_, res) => {
      res.json({ message: 'Welcome to our service!' });
    });

    // Setup our router later
    this.application.use('/users', usersRoutes);
  }
}

export default new App();
