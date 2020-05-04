const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
    ],
  },
};
