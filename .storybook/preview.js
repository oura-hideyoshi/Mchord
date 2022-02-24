export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 各パラメータの名前が
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}