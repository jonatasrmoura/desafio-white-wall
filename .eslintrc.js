module.exports = {
  parser: "@typescript-eslint/parser", // Parser para TypeScript
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Recomendações do plugin do TypeScript
    "prettier", // Desativa regras que entram em conflito com o Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Adicione ou sobrescreva regras aqui
    "@typescript-eslint/no-explicit-any": ["warn"],
    "no-console": ["warn"],
  },
  plugins: ["@typescript-eslint"],
};
