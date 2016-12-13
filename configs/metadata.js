const helpers = require('./helpers');

module.exports = {
    title: 'ng2-tru-poc',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer(),
    output: 'public',
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/boot.ts'
    }
};