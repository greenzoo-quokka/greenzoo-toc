module.exports = {
  //theme: 'greenzoo',
  //theme: path.resolve(__dirname, '.vuepress/theme'),
  dest : "docs",
  base: '/greenzoo-toc/',
  //dest: 'docs',
  lang: 'en-US',
  title: 'GreenZoo 기술문서',
  description: 'GreenZoo Table Of Contents',
  // chainWebpack(config) {
  //   config.externals([/^(vue|vue-router)$/])
  // },

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebarDepth : 10,
    search: true, // 검색기능
    nav: [// 상단 메뉴
      { text: 'Home', link: '/' }, 
      { text: 'Blog', link: 'https://greenzoo.tistory.com'},
      { text: 'GitHub', link: 'https://github.com/greenzoo-quokka'},
    ],
    sidebar: 'auto', // 사이드바 사용 여부. auto로 하면 content의 내용이 반영된다.
    smoothScroll: true // 부드러운 스크롤 사용 여부
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'About', link: '/about.html' },
    //   { text: '서브메뉴',
    //       items: [
    //           { text: '메뉴１', link: '/' },
    //           { text: '메뉴２', link: '/about.html' },
    //       ]
    //   }
    // ],
    // sidebar: [　//사이드바 링크
    //     ['/', '사이드바 메뉴１'],
    //     ['/about.html', '사이드바 메뉴２'],
    // ]
  },
  
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    }
  }
}