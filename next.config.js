const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
})