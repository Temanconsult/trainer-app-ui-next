describe('next.config.js', () => {
  const localApiGateway = 'http://localhost:8000/v2/graphql'

  afterEach(() => {
    // to re-import next.config with new process.env
    jest.resetModules()
  })

  it('should render a correct env object', () => {
    process.env.APP_ENV = 'test'
    // eslint-disable-next-line
    const config1 = require('../next.config')

    expect(process.env.APP_ENV).toBe('test')
    expect(config1.publicRuntimeConfig.appEnv).toEqual('test')
    expect(config1.publicRuntimeConfig.apiGatewayUrl).toEqual(localApiGateway)
  })
})
