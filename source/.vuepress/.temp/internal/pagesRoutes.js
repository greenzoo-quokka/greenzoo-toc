import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html","",["/contributing","/contributing.md"]],
  ["v-7fdc6af1","/markdown.html","Markdown",["/markdown","/markdown.md"]],
  ["v-8daa1a0e","/","GreenZoo",["/index.html","/README.md"]],
  ["v-22991227","/about/about.html","Dongjin Lim",["/about/about","/about/about.md"]],
  ["v-6f552be4","/projects/actuator.html","greenzoo-actuator",["/projects/actuator","/projects/actuator.md"]],
  ["v-f9fea286","/projects/doc.html","greenzoo-doc",["/projects/doc","/projects/doc.md"]],
  ["v-23c445fa","/projects/jpa.html","greenzoo-jpa",["/projects/jpa","/projects/jpa.md"]],
  ["v-60348fad","/projects/logger.html","greenzoo-logger",["/projects/logger","/projects/logger.md"]],
  ["v-56885ba2","/projects/oauth2.html","greenzoo-oauth2",["/projects/oauth2","/projects/oauth2.md"]],
  ["v-ede6b956","/projects/resttdd.html","greenzoo-resttdd",["/projects/resttdd","/projects/resttdd.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
