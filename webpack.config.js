
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === "development";
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    // open:true
  },
  // вход файла
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
    main: path.resolve(__dirname, "src/scripts", "nav_menu-swiper.js"),
  },
  // выход сборки
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index.[contenthash].js",
    // assetModuleFilename: "asset/[hash][ext]",
  },
  // плагины
  // Минимизатор CSS кода
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css",
    }),
    // Пдагин для подключения HTML и сохранения его в папку по имени
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      // html Загрузчик для постоянного обновления Index html
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Установка шрифтов
      {
        test: /\.(woff2?|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      // Подключение JS
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      // Подключение CSS
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Подключение SASS
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    require("postcss-preset-env"),
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      // Подключенние Img
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // Сжиматель image
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
        generator: {
          filename: "image/[name][ext]",
        },
      },
    ],
  },
};