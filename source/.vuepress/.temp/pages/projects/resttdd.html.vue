<template><h1 id="greenzoo-resttdd" tabindex="-1"><a class="header-anchor" href="#greenzoo-resttdd" aria-hidden="true">#</a> greenzoo-resttdd</h1>
<ul>
<li>
<p>RESTAPI + TDD 프로젝트</p>
</li>
<li>
<p>참고사이트</p>
</li>
<li>
<p>백기선님 강의중</p>
</li>
<li>
<p>REST를 구성하는 스타일</p>
</li>
</ul>
<blockquote>
<p>Client - Server
Stateless
cache
uniform interface
layered system
code-on-demand(optional)</p>
</blockquote>
<ul>
<li>Uniform Interface</li>
</ul>
<blockquote>
<p>독립적인 진화
서버의 기능이 변경되어도 클라이언트를 업데이트할 필요없다.
ex) 웹 브라우저 - HTTP, HTML 명세가 변경되어도 웹은 잘동작한다.
Self-descriptive messages</p>
<blockquote>
<p>메시지는 스스로 설명해야한다.
어떤 문법(미디어타입)인지?
각 키는 무슨 뜻인지?(명세)
리턴 메시지로 다 설명이 가능해야함
hypermedia as the engine of application state(HATEOAS)
애플리케이션의 상태는 Hyperlink를 이용해 전이되어야 한다.</p>
</blockquote>
</blockquote>
<ul>
<li>TDD 작성 후 아래와 같은 형태 테스트</li>
</ul>
<blockquote>
<p>Self-descriptive messages, HATEOAS 확인</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{{Media Type}}
{
    "data" : {
​    },
    "_links" : {
        "self" : {
            "href" : "http://localhost~~~"
        },
        "get-account" : {
            "href" : "http://localhost~~~"
        },
        "create-account" : {
            "href" : "http://localhost~~~"
        },
        "update-account" : {
            "href" : "http://localhost~~~"
        },
        "delete-account" : {
            "href" : "http://localhost~~~"
        }
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>
