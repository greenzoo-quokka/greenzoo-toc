export const data = {
  "key": "v-22991227",
  "path": "/about/about.html",
  "title": "Dongjin Lim",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": false,
    "title": "Dongjin Lim",
    "meta": [
      {
        "name": "description",
        "content": "Who is DongJin LIM?"
      }
    ],
    "tags": [
      "about"
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "about/about.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
