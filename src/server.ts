/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from './config/config';
import App from './app';

dotenv.config();
(async () => {
  try {
    await mongoose.connect(config.mongo.url, {
      retryWrites: true,
      w: 'majority',
    });
    App.start(config.server.port);
    console.log('mongodb connected');
  } catch (err) {
    console.log(`error in connecting database ${err}`);
  }
})();
