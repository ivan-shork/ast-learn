module.exports = {
  root: true, 
  parserOptions: {
      sourceType: 'module'
  },
  env: {
      browser: true,
  },
  plugins: [
    'aven'
  ],
//  解析所有高级语法的ast 输出给eslint使用 
//   parser: 'babel-eslint',
  parser: '@babel/eslint-parser',
  rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": process.env.NODE_ENV === 'development' ? 'off' : 'error',
      "arrow-parens": 0,
      "aven/settimeout-no-number": "error"
  }
}