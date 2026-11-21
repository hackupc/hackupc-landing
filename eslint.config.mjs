import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import react from "eslint-plugin-react";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Equivalent to the old `plugin:react/recommended`. The `react` plugin itself
  // is already registered by eslint-config-next, so only the rules are reused.
  {
    rules: react.configs.flat.recommended.rules,
  },
  {
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      quotes: ["error", "double"],
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
      "no-param-reassign": [2, { props: false }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.ts",
            "**/*.test.tsx",
            "**/*mock-utils.ts",
            "eslint.config.mjs",
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*.svg",
    "**/*.css",
  ]),
]);
