// load .env file if present, takes an object with path argument if needed
require('dotenv').config()
const withSass = require('@zeit/next-sass')

// Place all configs here so that NextJS can properly control configs
const localApiGateway = 'http://localhost:8000/v2/graphql'
const config = {
  appEnv: process.env.APP_ENV || 'default',
  apiGatewayUrl: process.env.API_GATEWAY_URL || localApiGateway,
}

module.exports = withSass({
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client (but not during build)
    ...config,
  },
})
