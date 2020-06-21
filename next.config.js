// load .env file if present, takes an object with path argument if needed
require('dotenv').config({ path: `env/.${process.env.APP_ENV}.env` })
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const config = {
  appEnv: process.env.APP_ENV,
  apiGatewayUrl: process.env.API_GATEWAY_URL,
}

module.exports = withImages(
  withSass({
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    publicRuntimeConfig: {
      // Will be available on both server and client (but not during build)
      ...config,
    },
  })
)
