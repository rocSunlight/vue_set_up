'use strict'
/*
* webpack.base.conf.js是一个基础的的环境配置，里面写的个各个环境（包括开发环境，生产环境，测试环境）都需要的配置可以认为是公共部分。
* 我们可以再环境中配置css、js、img等的配置
*
* */

const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

/* 用于把px转换rem  下面注释只是为了知道引用到的东西*/
const webpack = require('webpack')
// const px2rem = require('postcss-px2rem')
// const postcss = require('postcss')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.css','.styl'],
    // alias 配置快捷路径
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'compontents': resolve('src/compontents'),
      'assets': resolve('src/assets'),
      'views': resolve('src/views'),
      'utils': resolve('src/utils'),
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
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
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

  //此插件是自动把px换算成rem   remUnit: 75  为750的设计图
  plugins : [
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [require('postcss-px2rem')({ remUnit: 75, propWhiteList: [] })]
      },
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
