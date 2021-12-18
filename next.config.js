const { withPlaiceholder } = require('@plaiceholder/next')

// next.config.js
module.exports = withPlaiceholder({
  images: {
    domains: ['secure.gravatar.com', 'test.feg-gossau.ch', 'feg-gossau.ch']
  }
})
