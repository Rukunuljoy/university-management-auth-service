import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function tailwind() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connection established')

    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('failed to connect', error)
  }
}

tailwind()
