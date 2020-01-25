module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    // prettier
    'prettier',
    '@vue/prettier',
    // eslint
    "eslint:recommended", 
    // plugin vue
    'plugin:vue/essential',
    "plugin:vue/recommended"
  ],
  rules: {
    "vue/html-indent": "off"
  }
};