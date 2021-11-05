// .vuepress/config.js
const { config } = require("vuepress-theme-hope");

module.exports = config({
  //theme: 'greenzoo',
  //theme: path.resolve(__dirname, '.vuepress/theme'),
  dest : "docs",
  base: '/greenzoo-toc/',
  //dest: 'docs',
  lang: 'en-US',
  title: 'GreenZoo 기술문서',
  description: 'GreenZoo Table Of Contents',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    }
  },
  evergreen: true,
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
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.js?$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    [
      "md-enhance",
      {
        // Enable flowchart
        flowchart: true,
        mermaid: true,
        demo: true,
      },
    ],
    ["@vuepress/back-to-top"],
    [
      "vuepress-plugin-anchor-toc",
      {
        showDepth: 2,
        customClass: 'right-list',
        ignore: [
          // more...
        ]
      }
    ],
    [
      "@mr-hope/copy-code",
      {
        // your options
      },
    ],
    // [
    //   'vuepress-plugin-right-anchor',
    //   {
    //     showDepth: 1,
    //     //customClass: 'right-list',
    //     ignore: [
    //       '/',
    //       '/api/'
    //       // more...
    //     ],
    //     expand: {
    //       trigger: 'hover',
    //       clickModeDefaultOpen: true
    //     },
    //     customClass: 'right-list',
    //     disableGlobalUI: false,
    //   }
    // ]
    // [
    //   'vuepress-plugin-right-anchor',
    //   {
    //     showDepth: 1,
    //     ignore: [
    //       '/',
    //       '/api/'
    //       // more...
    //     ],
    //     expand: {
    //       trigger: 'hover',
    //       clickModeDefaultOpen: true
    //     },
    //     customClass: 'your-customClass',
    //     disableGlobalUI: false,
    //   }
    // ],
    // [
    //   "@mr-hope/comment",
    //   {
    //     // your options
    //   },
    // ],
  ],  
  globalUIComponents: [
    // '@mr-hope/comment',
    "back-to-top",
  ],
  themeConfig: {
    copyCode: {},
    logo: 'https://vuejs.org/images/logo.png',
    breadcrumb : true,
    sidebarDepth : 10,
    search: true, // 검색기능
    nav: [// 상단 메뉴
      { text: 'Home', link: '/' }, 
      { text: 'Blog', link: 'https://greenzoo.tistory.com'},
      { text: 'GitHub', link: 'https://github.com/greenzoo-quokka'},
    ],
    sidebar : [
      {
        title: "GreenZoo",
        path: "/",
        collapsable: true,
        children: []
      },
      // {
      //   title: "Project",
      //   path: "/projects",
      //   collapsable: true,
      //   children: [
      //     {
      //       title: "FlowChart",
      //       path: "/plugins/flowchart",
      //       icon: "page",
      //       collapsable: false,
      //       children: [],
      //     },
      //     {
      //       title: "LoB : 리그오브분리수거",
      //       path: "/projects/lob",
      //       icon: "page",
      //       collapsable: false,
      //       children: [],
      //     },
      //   ]
      // },
      {
        title: "LoB : 리그오브분리수거",
        path: "/lob",
        icon: "page",
        collapsable: true,
        children: [],
      },
      {
        title: "MarkDraw",
        path: "/markdraw",
        icon: "page",
        collapsable: true,
        children: [
        ],
      },
      {
        title: "Cheat Sheet",
        path: "/cheatsheet",
        collapsable: true,
        children: [
          {
            title: "GIT",
            path: "/cheatsheets/git",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "SQL",
            path: "/cheatsheets/sql",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "Docker",
            path: "/cheatsheets/docker",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "Kubernetes",
            path: "/cheatsheets/kubernetes",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "Nodejs",
            path: "/cheatsheets/nodejs",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "Redis",
            path: "/cheatsheets/redis",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "리눅스/도스명령어",
            path: "/cheatsheets/linux",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "ReactNative",
            path: "/cheatsheets/react",
            icon: "page",
            collapsable: false,
            children: [],
          },
        ]
      },
      {
          title: "Spring Boot 프로젝트",
          path: "/projects",
          icon: "creative",
          collapsable: true,
          children: [
            {
              title: "GreenZoo-Actuator",
              path: "/projects/actuator",
              icon: "page",
              collapsable: false,
              children: [],
            },
            {
              title: "GreenZoo-Doc",
              path: "/projects/doc",
              icon: "page",
              collapsable: false,
              children: [],
            },
            {
              title: "GreenZoo-Jpa",
              path: "/projects/jpa",
              icon: "page",
              collapsable: false,
              children: [],
            },
            {
              title: "GreenZoo-Logger",
              path: "/projects/logger",
              icon: "page",
              collapsable: false,
              children: [],
            },
            {
              title: "GreenZoo-OAuth2",
              path: "/projects/oauth2",
              icon: "page",
              collapsable: false,
              children: [],
            },
            {
              title: "GreenZoo-RestTdd",
              path: "/projects/resttdd",
              icon: "page",
              collapsable: false,
              children: [],
            },
          ],
      },
      {
        title: "VuePress 플러그인",
        path: "/plugins",
        collapsable: true,
        children: [
          {
            title: "PlantUML",
            path: "/plugins/plantuml",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "FlowChart",
            path: "/plugins/flowchart",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "MarkDown",
            path: "/plugins/markdown",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "MerMaid",
            path: "/plugins/mermaid",
            icon: "page",
            collapsable: false,
            children: [],
          },
          {
            title: "Demo",
            path: "/plugins/demo",
            icon: "page",
            collapsable: false,
            children: [],
          },
        ]
      },
    ],
    smoothScroll: true, // 부드러운 스크롤 사용 여부
    backToTop : true,
    mdEnhance: {
      flowchart: true,
    },
  },
});