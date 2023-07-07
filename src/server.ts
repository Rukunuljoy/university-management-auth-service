/* eslint-disable no-console */

import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;
async function databaseConnection() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('database connection established');

    server = app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('failed to connect', error);
  }

  process.on('unhandledRejection', error => {
    console.log('unhandled rejection is detected,we are closing our server');
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

databaseConnection();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
