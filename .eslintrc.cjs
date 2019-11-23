module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["import", "prettier"],
  rules: {
    "import/no-absolute-path": "error",
    "import/extensions": ["error", "ignorePackages"],
    "import/order": "error",
    "no-console": "off",
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-restricted-imports": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": "error",
    "sort-imports": "off",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
    "prettier/prettier": "error"
  }
};