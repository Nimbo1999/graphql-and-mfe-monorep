const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
        "@": path.resolve(__dirname, 'src')
    }
  },

  devServer: {
    port: 3002,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader", {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: function() {
                        return [require('autoprefixer')]
                    }
                }
            }
        }],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "finance",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './FinanceApp': path.join(__dirname, 'src', 'api', 'App.tsx')
      },
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    })
  ],
};
