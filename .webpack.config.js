module.exports = (config) => {
  config.target = "electron-renderer";
  config.module = {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],    
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
  return config;
};
