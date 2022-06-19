module.exports = {
  automock: false,
  setupFiles: ['./setupJest.js'],
  testEnvironment: 'jsdom',
  testRegex: '((\\.|/*.)(spec))\\.js?$',
};
