import app from './app'
import mongoose from 'mongoose'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url)

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
