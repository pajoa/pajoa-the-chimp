require('enhanced-require')(module, {
  recursive: false,
  module: {
    loaders: [
      {test: /\.txt$/, loaders: ['raw']},
      {test: /\.json$/, loaders: ['json']},
      {test: /\.jsx$/, loaders: ['jsx-loader?harmony']}
    ]
  },
})('./server.jsx');
