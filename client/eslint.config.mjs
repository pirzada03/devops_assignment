import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }},
  {files: ["**/*.js"], languageOptions: {sourceType: "module"}},
  {languageOptions: { globals: { ...globals.browser, ...globals.node } }},
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
  {plugins: { react: pluginReact, 'react-hooks': pluginReactHooks }},
  {rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class', 'row', 'align'] }],
    'react-hooks/exhaustive-deps': 'error',
    'no-unused-vars': 'warn',
  }},
];
