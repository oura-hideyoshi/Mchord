export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 各パラメータの名前がmatchersで一致した際、以下の変数として、storybook上で編集できるようになる
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}