const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".scss"],
    alias: {
        "@adapters": path.resolve(__dirname, 'src/adapters'),
        "@components": path.resolve(__dirname, 'src/components'),
        "@pages": path.resolve(__dirname, 'src/pages'),
        "@providers": path.resolve(__dirname, 'src/providers'),
        "@hooks": path.resolve(__dirname, 'src/hooks'),
        "@models": path.resolve(__dirname, 'src/models'),
        "@constants": path.resolve(__dirname, 'src/constants'),
        "@utils": path.resolve(__dirname, 'src/utils'),
    }
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
        use: 'source-map-loader'
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "category",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './CategoryApp': path.join(__dirname, 'src', 'api', 'App.tsx')
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
