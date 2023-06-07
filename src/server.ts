/* eslint-disable no-console */

import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function databaseConnection() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connection established')

    server = app.listen(config.port, () => {
      logger.info(`application listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('failed to connect', error)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandled rejection is detected,we are closing our server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

databaseConnection()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
