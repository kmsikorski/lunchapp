module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },    
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react"
    ],

    "settings": {
      "react": {
          "version": require('./package.json').dependencies.react,
      }
    },
    "rules": {
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "no-multiple-empty-lines": ["error", {"max": 1}],
      "jsx-quotes": ["error", "prefer-double"],
      "quotes": ["error", "double"]
    }
};