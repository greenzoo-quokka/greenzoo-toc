(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{465:function(a,s,e){"use strict";e.r(s);var t=e(1),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[a._v("#")]),a._v(" Kubernetes")]),a._v(" "),e("h2",{attrs:{id:"external-ip-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-ip-확인"}},[a._v("#")]),a._v(" EXTERNAL-IP 확인")]),a._v(" "),e("p",[a._v("Service가 pending 상태에서 생성이 완료되면 EXTERNAL-IP를 확인합니다.")]),a._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" get service "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("-n")]),a._v(" ingress-nginx")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"pod-service-생성-및-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod-service-생성-및-확인"}},[a._v("#")]),a._v(" Pod/Service 생성 및 확인")]),a._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" create "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("-f")]),a._v(" *.yaml")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" get pods ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" get svc")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"해당-pods-접속"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해당-pods-접속"}},[a._v("#")]),a._v(" 해당 Pods 접속")]),a._v(" "),e("div",{staticClass:"language-batch line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" get pods ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("kubectl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("--kubeconfig")]),a._v("="),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("%KUBE_CONFIG%")]),a._v(" exec -ti [POD-ID] sh")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);