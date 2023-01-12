const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;




const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


const plugins = () => {
    const basePlugins = [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            minify:{
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
        new ESLintPlugin(),
        new PrettierPlugin({
          printWidth: 80,               // Specify the length of line that the printer will wrap on.
          tabWidth: 2,                  // Specify the number of spaces per indentation-level.
          useTabs: false,               // Indent lines with tabs instead of spaces.
          semi: true,                   // Print semicolons at the ends of statements.
          encoding: 'utf-8',            // Which encoding scheme to use on files
          extensions: [ ".js", ".ts" ]  // Which file extensions to process
        }),
    ];

    if (isProd) {
        basePlugins.push(
          new ImageminPlugin({
            bail: false, 
            cache: true,
            imageminOptions: {
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                [
                  "svgo",
                  {
                    plugins: [
                      {
                        removeViewBox: false
                      }
                    ]
                  }
                ]
              ]
            }
          })
        )
      }
    return basePlugins
}

module.exports = {
    context: path.resolve(__dirname, './'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devServer:{
        historyApiFallback: true,
        static: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                  esModule: false,
                },
              },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        },
                    },
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
                    }
                  },
                  'css-loader',
                  'sass-loader'
                ],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],

              },
              {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: `./img/${filename('[ext]')}`
                  }
                }],
              },
              // {
              //   test: /\.js$/,
              //   exclude: /node_modules/,
              //   loader: 'eslint-loader',
              //   options: {
              //     // eslint options (if necessary)
              //   },
              // },
              {
                test: /\.(?:|woff2)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: `./fonts/${filename('[ext]')}`
                  },
                  
                }],
              },
              // {
              //   test: /\.js$/,
              //   exclude: /node_modules/,
              //   use: ['babel-loader', 'eslint-loader'],
              // },
        ]
    }
};