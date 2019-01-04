const path = require('path');

module.exports = {
  entry: {
    lineGraph: '../lineGraph-feature/client/index.jsx',
    aboutAndNews: '../AboutAndNews-feature/client/index.jsx',
    buySell: '../buySell-feature/client/src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-styled-components'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};web