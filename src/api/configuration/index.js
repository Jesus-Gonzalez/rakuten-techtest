import * as Development from './configuration.development'
import * as Production from './configuration.production'

const configuration = process.env.NODE_ENV === 'production'
  ? Production
  : Development

export default configuration
