const express = require('express');
const webpackDevMiddlware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');

const app = express();

const compiler = webpack(webpackConfig)

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddlware(compiler, {
  publicPath: webpackConfig.output.path,
  stats: {
    colors: true,
  }
}));

// Need this to serve the index.html file for every React component
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/www/index.html'));
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log(`App listening at http://localhost:${port}`);
})
