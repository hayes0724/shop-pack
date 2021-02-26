(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(90)),b={id:"commands",title:"Commands",sidebar_label:"Commands",slug:"/commands"},i={unversionedId:"commands",id:"commands",isDocsHomePage:!1,title:"Commands",description:"List of all API commands for Packer:",source:"@site/docs\\commands.md",slug:"/commands",permalink:"/docs/commands",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/commands.md",version:"current",sidebar_label:"Commands",sidebar:"someSidebar",previous:{title:"Quick start",permalink:"/docs/quick-start"},next:{title:"HTTPS & SSL",permalink:"/docs/ssl"}},c=[{value:"init",id:"init",children:[]},{value:"start",id:"start",children:[]},{value:"watch",id:"watch",children:[]},{value:"deploy",id:"deploy",children:[]},{value:"build",id:"build",children:[]},{value:"lint",id:"lint",children:[]},{value:"format",id:"format",children:[]},{value:"zip",id:"zip",children:[]},{value:"theme:list",id:"themelist",children:[]},{value:"theme:create",id:"themecreate",children:[]},{value:"theme:remove",id:"themeremove",children:[]},{value:"theme:download",id:"themedownload",children:[]},{value:"help",id:"help",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"List of all API commands for Packer:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#init"},"init")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#start"},"start")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#watch"},"watch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#deploy"},"deploy")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#build"},"build")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#lint"},"lint")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#format"},"format")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#zip"},"zip")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#theme:list"},"theme:list")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#theme:create"},"theme:create")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#theme:remove"},"theme:remove")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#theme:download"},"theme:download")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#help"},"help"))),Object(l.b)("h3",{id:"init"},"init"),Object(l.b)("p",null,"Creates a blank start theme in specified directory. By default, it will use ",Object(l.b)("inlineCode",{parentName:"p"},"hayes0724/packer-blank-theme"),"\nunless you specify the repo flag with the name of the themes github repo. It will pull the latest release and fail\nif the custom theme repo has no releases."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"packer init <dir> [--repo=hayes0724/packer-blank-theme]\n")),Object(l.b)("h3",{id:"start"},"start"),Object(l.b)("p",null,"Compiles your local theme files into a dist directory, uploads these files to your remote Shopify store and finally\nboots up a local Express server that will serve most of your CSS and JavaScript."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer start [--env=my-custom-env-name] [--skipPrompts] [--skipFirstDeploy]\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment. Setting --env=production would use the production settings in packer.config.json")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--skipPrompts")),Object(l.b)("td",{parentName:"tr",align:null},"Skips all prompts. This is especially useful when using Packer with continuous integration tools")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--skipFirstDeploy")),Object(l.b)("td",{parentName:"tr",align:null},"Skips the file upload sequence and simply boots up the local Express server")))),Object(l.b)("h3",{id:"watch"},"watch"),Object(l.b)("p",null,"Same as start command except it skips the first deployment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer watch [--env=my-custom-env-name] [--skipPrompts]\n")),Object(l.b)("h3",{id:"deploy"},"deploy"),Object(l.b)("p",null,"Uploads the dist folder to the Shopify store."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer deploy [--env=my-custom-env-name] [--skipPrompts] [--replace]\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," Flag ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment. Setting --env=production would use the production settings in packer.config.json")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--skipPrompts")),Object(l.b)("td",{parentName:"tr",align:null},"Skips all prompts. This is especially useful when using Packer with continuous integration tools")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--nodelete")),Object(l.b)("td",{parentName:"tr",align:null},"By default deploy will replace all files in theme, use this flag to update without removing existing files")))),Object(l.b)("h3",{id:"build"},"build"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer build [--analyze]\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--analyze")),Object(l.b)("td",{parentName:"tr",align:null},"Analyzes bundles")))),Object(l.b)("p",null,"Builds a production-ready version of the theme by compiling the files into the dist folder."),Object(l.b)("h3",{id:"lint"},"lint"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer lint [--scripts] [--styles] [--locales]\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--scripts")),Object(l.b)("td",{parentName:"tr",align:null},"Runs linting only on script files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--styles")),Object(l.b)("td",{parentName:"tr",align:null},"Runs linting only on style files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--locales")),Object(l.b)("td",{parentName:"tr",align:null},"Runs linting only on locales files")))),Object(l.b)("h3",{id:"format"},"format"),Object(l.b)("p",null,"Formats the theme code according to the rules declared in the .eslintrc and .stylelintrc files. By default, it uses\nESLint Fix to format JS files, Stylelint Fix to format CSS files and Prettier to format JSON files."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer format [--scripts] [--styles] [--json]\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--scripts")),Object(l.b)("td",{parentName:"tr",align:null},"Runs formatting only on script files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--styles")),Object(l.b)("td",{parentName:"tr",align:null},"Runs formatting only on style files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--locales")),Object(l.b)("td",{parentName:"tr",align:null},"Runs formatting only on locales files")))),Object(l.b)("h3",{id:"zip"},"zip"),Object(l.b)("p",null,"Compiles the contents of the dist directory and creates a ZIP file in the root of the project."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer zip\n")),Object(l.b)("h3",{id:"themelist"},"theme:list"),Object(l.b)("p",null,"Lists all themes (shows name, themeID, etc...) on the site, requires app password and store url be set first. By default looks at the store for development env in packer.config.json"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer theme:list\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment. Setting --env=production would use the production settings in packer.env.json")))),Object(l.b)("h3",{id:"themecreate"},"theme:create"),Object(l.b)("p",null,"Creates a new empty theme on Shopify and updates packer.config.json for the selected env with the proper themeID"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer theme:create\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," Flag ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment. Setting --env=production would use the production settings in packer.env.json")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--name=my-theme-name ")),Object(l.b)("td",{parentName:"tr",align:null},"Sets the theme name on Shopify, it's required")))),Object(l.b)("h3",{id:"themeremove"},"theme:remove"),Object(l.b)("p",null,"Removes the theme set in the selected env from Shopify"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer theme:remove\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment (defaults to development). Setting --env=production would use the production settings in packer.config.json")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--id")),Object(l.b)("td",{parentName:"tr",align:null},"Delete a theme by using its ID")))),Object(l.b)("h3",{id:"themedownload"},"theme:download"),Object(l.b)("p",null,"Downloads the theme set in the selected env from Shopify"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer theme:download\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Flag"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"--env")),Object(l.b)("td",{parentName:"tr",align:null},"Targets a custom environment. Setting --env=production would use the production settings in packer.config.json")))),Object(l.b)("h3",{id:"help"},"help"),Object(l.b)("p",null,"Display all commands and flags"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"packer help\n")))}p.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(b,".").concat(d)]||m[d]||s[d]||l;return a?r.a.createElement(u,i(i({ref:t},o),{},{components:a})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);