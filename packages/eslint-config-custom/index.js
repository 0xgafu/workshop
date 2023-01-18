module.exports = {
  ignorePatterns: ["**/dist/**/*", "*.cjs"],

  env: {
    node: true
  },

  extends: [
    "next",
    "eslint:recommended",
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    "turbo",
    "prettier"
  ],

  plugins: [
    '@typescript-eslint',
    'tailwindcss'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },

  rules: {
    "curly": ["error", "multi-line"],
    "no-console": ["off"],
    "max-len": ["warn", { ignoreComments: true }],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
};
