const minimist = require('minimist');
const startServer = require('./server');

const args = minimist(process.argv.slice(2));
const isDevelopment = [true,'true'].includes(args.dev);

process.env.NODE_ENV = isDevelopment ? 'development' : 'production';

console.log('Starting in '+(isDevelopment ? 'Development' : 'Production')+' mode.');
startServer();
