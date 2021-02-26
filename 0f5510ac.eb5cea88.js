(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(90)),a={id:"environment",title:"Environment",sidebar_label:"Environment",slug:"/config/environment"},c={unversionedId:"config/environment",id:"config/environment",isDocsHomePage:!1,title:"Environment",description:"Environment settings are located in `packer.env.json`.",source:"@site/docs\\config\\environment.md",slug:"/config/environment",permalink:"/docs/config/environment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/config/environment.md",version:"current",sidebar_label:"Environment",sidebar:"someSidebar",previous:{title:"Files",permalink:"/docs/config"},next:{title:"App settings",permalink:"/docs/config/settings"}},l=[],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Environment settings are located in ",Object(i.b)("inlineCode",{parentName:"p"},"packer.env.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "development": {\n      "id": "74500041118",\n      "password": "ebd6ce7f27aae8cdafb8111a5b887b9",\n      "store": "my-store-name.myshopify.com",\n      "live": "false",\n      "ignore": [\n        "settings_data.json"\n      ]\n    }\n}\n\n')),Object(i.b)("p",null,"By default, most commands will use development environment unless you\noverride with the ",Object(i.b)("inlineCode",{parentName:"p"},"--env")," flag"),Object(i.b)("p",null,"live - will allow deploying to published themes and skip the default prompts"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"packer start --env=production\n")),Object(i.b)("p",null,"This will use the settings set ",Object(i.b)("inlineCode",{parentName:"p"},"packer.env.json")," production"))}p.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);