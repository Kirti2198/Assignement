/* eslint-disable no-console */
import dotenv from 'dotenv';

import App from './app';

dotenv.config();
(async () => {
  App.start(process.env.PORT);
})();
