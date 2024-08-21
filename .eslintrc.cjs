module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "import", "react", "react-hooks"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Add rule to catch unresolved imports
    "import/no-unresolved": [
      "error",
      {
        ignore: ["\\.svg\\?react$"], // Ignore path check for svg files
      },
    ],
    // Ensure all used variables are defined
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // Adjust severity of no-unused-vars rule to warning
    "no-unused-vars": "warn",
    // Disable the import/no-named-as-default rule
    "import/no-named-as-default": "off",
    // recoil
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
  },
};
