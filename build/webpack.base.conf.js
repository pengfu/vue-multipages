var path = require('path')
var utils = require('./utils')
var glob = require('glob')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var srcDir = path.resolve(__dirname, '../src')
var entries = getEntry(srcDir + '/module/**/*.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 获取入口文件
function getEntry (globPath) {
  var entries = {},
    filename;

  glob.sync(globPath).forEach(function (entry) {
    filename = path.basename(entry, path.extname(entry));
    entries[filename] = entry;
  });

  return entries;
}

// 生成html
function createHtml () {
  var r = [], filename, conf;

  glob.sync(srcDir + '/module/**/*.html').forEach(function (filePath) {
    filename = path.basename(filePath, path.extname(filePath));

    conf = {
      template:  filePath,
      filename: filename + '.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }

    if (filename in entries) {
      conf.inject = 'body';
      conf.chunks = [filename, 'vendor', 'manifest', 'bootstrap']
    }

    r.push(new HtmlWebpackPlugin(conf))
  })

  return r;
}

module.exports = {
  entry:entries,

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery$': 'jquery/dist/jquery',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'js': path.resolve(__dirname, '../src/js'),
      'components': path.resolve(__dirname, '../src/components'),
      'less': path.resolve(__dirname, '../src/less')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: createHtml()
}
