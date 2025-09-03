module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier + disables conflicting rules
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Show prettier issues as ESLint errors
  },
};
