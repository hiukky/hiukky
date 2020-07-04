require('dotenv-flow').config()

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    GITHUB_BASE_URL: process.env.GITHUB_BASE_URL,
  },
}
