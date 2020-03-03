let BASE_URL = ''
// const BASE_URL_DEVELOPMENT = ''
// const BASE_URL_TEST = ''
// const BASE_URL_PRODUCTION = ''
const BASE_URL_ALL = 'http://47.96.165.40:8188'

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = BASE_URL_ALL
    break
  case 'test':
    BASE_URL = BASE_URL_ALL
    break
  case 'production':
    BASE_URL = BASE_URL_ALL
    break
  default:
    BASE_URL = BASE_URL_ALL
    break
}

export default {
  TITLE: '交易',
  BASE_URL
}
