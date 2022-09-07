const { withPlaiceholder } = require('@plaiceholder/next')

const withTranspilation = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
  "@fullcalendar/list"
]);

// next.config.js
module.exports = withTranspilation({...withPlaiceholder({
  images: {
    domains: ['secure.gravatar.com', 'test.feg-gossau.ch', 'feg-gossau.ch', 'images.unsplash.com']
  }
})})
