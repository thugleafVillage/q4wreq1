module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "next",
        "prettier",
        "eslint-config-next",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [
        ".eslintrc.js",
        "next.config.js",
        ".vscode",
        ".yarn",
        ".pnp.cjs",
        ".pnp.loader.mjs"
    ]
}
