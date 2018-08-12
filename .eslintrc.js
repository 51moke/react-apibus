module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      'react-app',
      // https://github.com/standard/standard/blob/master/docs/README-zhcn.md
      'standard'
    ],
    plugins: [
      'react',
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-console': 'error',
      //'eqeqeq':'warn'
    }
  }
  