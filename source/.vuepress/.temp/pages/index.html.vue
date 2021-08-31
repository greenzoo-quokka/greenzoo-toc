<template><h1 id="greenzoo" tabindex="-1"><a class="header-anchor" href="#greenzoo" aria-hidden="true">#</a> GreenZoo</h1>
<p>주제 내용</p>
<h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h2>
<p>소제목 내용 1</p>
<h2 id="프로젝트" tabindex="-1"><a class="header-anchor" href="#프로젝트" aria-hidden="true">#</a> 프로젝트</h2>
<p>소제목 내용 2</p>
<h3 id="greenzoo-actuator" tabindex="-1"><a class="header-anchor" href="#greenzoo-actuator" aria-hidden="true">#</a> GreenZoo-Actuator</h3>
<p><RouterLink to="/projects/actuator.html">상세보기</RouterLink></p>
<h3 id="greenzoo-doc" tabindex="-1"><a class="header-anchor" href="#greenzoo-doc" aria-hidden="true">#</a> GreenZoo-Doc</h3>
<p><RouterLink to="/projects/doc.html">상세보기</RouterLink></p>
<h3 id="greenzoo-jpa" tabindex="-1"><a class="header-anchor" href="#greenzoo-jpa" aria-hidden="true">#</a> GreenZoo-Jpa</h3>
<p><RouterLink to="/projects/jpa.html">상세보기</RouterLink></p>
<h3 id="greenzoo-logger" tabindex="-1"><a class="header-anchor" href="#greenzoo-logger" aria-hidden="true">#</a> GreenZoo-Logger</h3>
<p><RouterLink to="/projects/logger.html">상세보기</RouterLink></p>
<h3 id="greenzoo-oauth2" tabindex="-1"><a class="header-anchor" href="#greenzoo-oauth2" aria-hidden="true">#</a> GreenZoo-OAuth2</h3>
<p><RouterLink to="/projects/oauth2.html">상세보기</RouterLink></p>
<h3 id="greenzoo-resttdd" tabindex="-1"><a class="header-anchor" href="#greenzoo-resttdd" aria-hidden="true">#</a> GreenZoo-RestTdd</h3>
<p><RouterLink to="/projects/resttdd.html">상세보기</RouterLink></p>
<h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> MarkDown</h2>
<h3 id="sample" tabindex="-1"><a class="header-anchor" href="#sample" aria-hidden="true">#</a> Sample</h3>
<p><RouterLink to="/markdown.html">MarkDown</RouterLink></p>
<h3 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml" aria-hidden="true">#</a> Plantuml</h3>
<p>@startuml
node &quot;Client&quot; {
agent Browser
node &quot;VueFramework&quot; {
(VueRouter)
[Components]
node &quot;VueStore&quot; {
[State]
[Mutations]
[Actions]
}
}
}
Browser --&gt; VueRouter : URI
Browser -&gt; Components : Event
VueRouter --&gt; Components
VueStore --&gt; Components
State &lt;- Mutations
State &lt;-- Actions
Mutations &lt;- Actions
@enduml</p>
</template>
