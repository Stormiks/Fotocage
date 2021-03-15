module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true
    }
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // https://eslint.vuejs.org/rules/script-indent.html
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // https://eslint.vuejs.org/rules/no-multi-spaces.html
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    // https://eslint.vuejs.org/rules/component-tags-order.html
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    // https://eslint.vuejs.org/rules/this-in-template.html
    'vue/this-in-template': ['error', 'never']
  },

  extends: ['plugin:vue/essential', '@vue/standard']
}
