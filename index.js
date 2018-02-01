const webpack = require('webpack');
const minimist = require('minimist');

const developmentConfig = require('./webpack.dev.js');
const productionConfig = require('./webpack.prod.js');
const startServer = require('./server');

const args = minimist(process.argv.slice(2));
const isDevelopment = [true,'true'].includes(args.dev);

process.env.NODE_ENV = isDevelopment ? 'development' : 'production';

console.log('Starting in '+(isDevelopment ? 'Development' : 'Production')+' mode.');
startServer();
