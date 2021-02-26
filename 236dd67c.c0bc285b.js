(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(90)),a={id:"webpack",title:"Webpack",sidebar_label:"Webpack",slug:"/config/webpack"},i={unversionedId:"config/webpack",id:"config/webpack",isDocsHomePage:!1,title:"Webpack",description:"Packer includes two files for customizing the webpack build settings.",source:"@site/docs\\config\\webpack.md",slug:"/config/webpack",permalink:"/docs/config/webpack",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/config/webpack.md",version:"current",sidebar_label:"Webpack",sidebar:"someSidebar",previous:{title:"App settings",permalink:"/docs/config/settings"},next:{title:"Bundles",permalink:"/docs/features"}},p=[{value:"prod.config.js",id:"prodconfigjs",children:[]},{value:"dev.config.js",id:"devconfigjs",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Packer includes two files for customizing the webpack build settings.\nUses ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-merge"},"webpack-merge")," to combine the files with packers default config.\nYou can override or add any ",Object(o.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/"},"webpack configurations")," here "),Object(o.b)("h3",{id:"prodconfigjs"},"prod.config.js"),Object(o.b)("p",null,"Used on all production builds (",Object(o.b)("inlineCode",{parentName:"p"},"packer build"),")"),Object(o.b)("h3",{id:"devconfigjs"},"dev.config.js"),Object(o.b)("p",null,"Used on all development builds (",Object(o.b)("inlineCode",{parentName:"p"},"packer start"),", ",Object(o.b)("inlineCode",{parentName:"p"},"packer watch"),")"))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||o;return n?c.a.createElement(d,i(i({ref:t},s),{},{components:n})):c.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);