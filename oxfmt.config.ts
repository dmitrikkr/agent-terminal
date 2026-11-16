import { defineConfig } from 'oxfmt';

const oxfmt = defineConfig({
  printWidth: 110,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  sortPackageJson: true
});

export default {
  ...oxfmt,
  ignorePatterns: ['**/dist', '**/node_modules', '**/cache', '**/pnpm-lock.yaml', '**/.next']
};
