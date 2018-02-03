const webpack = require('webpack')
const resolve = require('path').resolve

const alias = {
  Components: resolve('src/public/components'),
  Containers: resolve('src/public/containers'),
  Styles: resolve('src/public/styles'),
  Actions: resolve('src/public/actions'),
  Reducers: resolve('src/public/reducers')
}

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity
  })
]

const webpackConfiguration = {
  entry: {
    app: resolve('src/public/'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: resolve('release'),
    filename: '[name].js'
  },
  resolve: { alias },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.html$/i,
        include: resolve('src'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins
}

module.exports = webpackConfiguration
