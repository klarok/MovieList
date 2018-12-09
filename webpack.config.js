module.exports = {
  entry: './src/components/App.js',
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(s*)css$/, loader: 'style-loader!css-loader!sass-loader'},
      ]
    },
  watch: true
}