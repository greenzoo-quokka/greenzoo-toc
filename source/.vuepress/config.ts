import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  //base: 'greenzoo-toc',
  dest: 'docs',
  lang: 'en-US',
  title: 'GreenZoo Table Of Contents',
  description: 'GreenZoo Table Of Contents',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
  },
})