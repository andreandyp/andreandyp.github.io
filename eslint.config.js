import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs, configureVueProject } from '@vue/eslint-config-typescript'

configureVueProject({
  scriptLangs: ["ts"],
});

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  defineConfigWithVueTs(
    pluginVue.configs["flat/recommended"],
    vueTsConfigs.recommended,
  ),
  {
    rules: {
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "vue/multi-word-component-names": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
    },
  },
];
