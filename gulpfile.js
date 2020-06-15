const {
  parallel, series, src, dest, watch,
} = require('gulp');

const rev = require('gulp-rev');
const sass = require('gulp-sass');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack-stream');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const pathSite = 'assets';
const pathBuild = 'assets/build';
const pathSiteDeploy = './public';
const envValues = new Dotenv({
  path: './.env',
}).definitions;

let environment = 'development';
if (
  Object.prototype.hasOwnProperty.call(envValues, 'process.env.APP_ENV')
  && envValues['process.env.APP_ENV'] === 'prod'
) {
  environment = 'production';
}

function buildCSS() {
  return src(`${pathSite}/css/app.scss`)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(dest(`${pathBuild}/css`));
}

function buildJS() {
  return src(`${pathSite}/js/app.js`)
    .pipe(
      webpack({
        mode: 'development',
        node: {
          fs: 'empty',
        },
        output: {
          filename: 'app.js',
          chunkFilename: './chunk/[name].[hash].js',
          library: 'app',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['@babel/preset-env'],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  '@babel/plugin-transform-modules-amd',
                  '@babel/plugin-transform-runtime',
                ],
              },
            },
          ],
        },
        plugins: [
          // new MinifyPlugin(),
          new Dotenv({
            path: './.env',
          }),
        ],
      }),
    )
    .pipe(dest(`${pathBuild}/js`));
}

function publishImages() {
  return src(`${pathSite}/images/**/*.+(png|jpg|gif|svg|mp4|ogg|webm)`).pipe(
    dest(`${pathBuild}/images`),
  );
}

function publishFonts() {
  return src(`${pathSite}/fonts/**/*`).pipe(dest(`${pathBuild}/fonts`));
}

function deploy(cb) {
  src([`${pathBuild}/**/*`])
    .pipe(dest(`${pathSiteDeploy}`))
  cb();
}

function watchSite() {
  watch([`${pathSite}/css/**/*.scss`, `${pathBuild}/css/**/*.scss`], series(buildCSS, deploy));
  // watch([`${pathSite}/js/**/*.js`, `${pathBuild}/js/**/*.js`], series(buildJS, deploy));
}

exports.deploy = series(
  parallel(buildCSS, buildJS, publishFonts, publishImages),
  deploy,
);

exports.watch = watchSite;
