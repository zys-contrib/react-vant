import{j as u,a as E}from"./main.eaa8a40a.js";const t=function({previewer:n=()=>null,api:h=()=>null}){const e=n;return u("div",{children:E("div",{children:[u("h1",{id:"\u5F00\u53D1\u6307\u5357","data-anchor":"\u5F00\u53D1\u6307\u5357",children:"\u5F00\u53D1\u6307\u5357"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u611F\u8C22\u4F60\u4F7F\u7528 React Vant\u3002"}),u("p",{children:"\u4EE5\u4E0B\u662F\u5173\u4E8E\u63D0\u4EA4\u53CD\u9988\u6216\u4EE3\u7801\u7684\u6307\u5357\u3002\u5728\u63D0\u4EA4 issue \u6216\u8005 PR \u4E4B\u524D\uFF0C\u8BF7\u5148\u82B1\u51E0\u5206\u949F\u65F6\u95F4\u9605\u8BFB\u4EE5\u4E0B\u6587\u5B57\u3002"}),u("h2",{id:"\u53C2\u4E0E\u5F00\u53D1","data-anchor":"\u53C2\u4E0E\u5F00\u53D1",children:"\u53C2\u4E0E\u5F00\u53D1"}),u("h3",{id:"\u672C\u5730\u5F00\u53D1","data-anchor":"\u672C\u5730\u5F00\u53D1",children:"\u672C\u5730\u5F00\u53D1"}),u("p",{children:"\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u5373\u53EF\u5728\u672C\u5730\u5F00\u53D1\u7EC4"}),u("blockquote",{children:E("p",{children:["react vant \u4F7F\u7528 ",u("a",{href:"https://pnpm.io/workspaces",children:"pnpm-workspace"}),"\uFF0C \u8BF7\u4F7F\u7528",u("a",{href:"https://pnpm.io/",children:"pnpm"}),"\u5B89\u88C5\u4F9D\u8D56"]})}),u(e,{code:`# \u514B\u9686\u4ED3\u5E93
git clone https://github.com/3lang3/react-vant.git

# \u5B89\u88C5\u4F9D\u8D56
cd react-vant && pnpm install

# \u8FDB\u5165\u5F00\u53D1\u6A21\u5F0F\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EE http://localhost:4000
pnpm dev`,lang:"bash"}),u("h3",{id:"\u76EE\u5F55\u7ED3\u6784","data-anchor":"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),E("ul",{children:[E("li",{children:["\u4ED3\u5E93\u7684\u7EC4\u4EF6\u4EE3\u7801\u4F4D\u4E8E ",u("code",{children:"src/components"})," \u4E0B\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u4E00\u4E2A\u6587\u4EF6\u5939"]}),E("li",{children:[u("code",{children:"docs"})," \u76EE\u5F55\u4E0B\u662F\u6587\u6863\u7F51\u7AD9\u7684\u4EE3\u7801"]})]}),u("p",{children:"\u9879\u76EE\u4E3B\u8981\u76EE\u5F55\u5982\u4E0B\uFF1A"}),u(e,{code:`react-vant
\u251C\u2500 docs-dist  # \u6587\u6863\u6784\u5EFA\u4EA7\u7269
\u251C\u2500 dist  # \u7EC4\u4EF6\u6784\u5EFA\u4EA7\u7269
\u251C\u2500 docs      # \u6587\u6863
\u251C\u2500 src       # \u7EC4\u4EF6
\u2514\u2500 typings     # \u7C7B\u578B`,lang:"unknown"}),u("h3",{id:"\u6DFB\u52A0\u65B0\u7EC4\u4EF6","data-anchor":"\u6DFB\u52A0\u65B0\u7EC4\u4EF6",children:"\u6DFB\u52A0\u65B0\u7EC4\u4EF6"}),u("p",{children:"\u6DFB\u52A0\u65B0\u7EC4\u4EF6\u65F6\uFF0C\u8BF7\u6309\u7167\u4E0B\u9762\u7684\u76EE\u5F55\u7ED3\u6784\u7EC4\u7EC7\u6587\u4EF6\u3002"}),u("blockquote",{children:E("p",{children:["\u53EF\u4EE5\u5728 ",u("code",{children:"rcdoc.config.ts"})," \u7684 ",u("code",{children:"menus"})," \u5C5E\u6027\u4E2D\u8C03\u6574\u7EC4\u4EF6\u83DC\u5355\u987A\u5E8F\u548C\u5206\u7EC4\u3002"]})}),u(e,{code:`src
\u2514\u2500components
  \u2514\u2500 button
    \u251C\u2500 demo              # \u793A\u4F8B\u4EE3\u7801
    \u251C\u2500 __test__          # \u5355\u5143\u6D4B\u8BD5
    \u251C\u2500 index.js          # \u7EC4\u4EF6\u5165\u53E3
    \u251C\u2500 style/index.less  # \u7EC4\u4EF6\u6837\u5F0F
    \u251C\u2500 README.md         # \u4E2D\u6587\u6587\u6863
    \u2514\u2500 README.en-US.md   # \u82F1\u6587\u6587\u6863`,lang:"unknown"}),u("h2",{id:"\u63D0\u4EA4-pr","data-anchor":"\u63D0\u4EA4-pr",children:"\u63D0\u4EA4 PR"}),u("h3",{id:"pull-request-\u89C4\u8303","data-anchor":"pull-request-\u89C4\u8303",children:"Pull Request \u89C4\u8303"}),u("p",{children:"\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u5728 GitHub \u4E0A\u63D0 Pull Request \uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u9762\u8FD9\u4E24\u7BC7\u6587\u7AE0\u6765\u5B66\u4E60\uFF1A"}),E("ul",{children:[u("li",{children:u("a",{href:"https://segmentfault.com/a/1190000000736629",children:"\u5982\u4F55\u4F18\u96C5\u5730\u5728 GitHub \u4E0A\u8D21\u732E\u4EE3\u7801"})}),u("li",{children:u("a",{href:"https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md",children:"\u7B2C\u4E00\u6B21\u53C2\u4E0E\u5F00\u6E90"})})]}),u("h4",{id:"\u89C4\u8303","data-anchor":"\u89C4\u8303",children:"\u89C4\u8303"}),E("ul",{children:[u("li",{children:"\u5982\u679C\u9047\u5230\u95EE\u9898\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u4F60\u7684 PR \u8DB3\u591F\u5C0F\u3002\u4FDD\u8BC1\u4E00\u4E2A PR \u53EA\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898\u6216\u53EA\u6DFB\u52A0\u4E00\u4E2A\u529F\u80FD"}),u("li",{children:"\u5F53\u65B0\u589E\u7EC4\u4EF6\u6216\u8005\u4FEE\u6539\u539F\u6709\u7EC4\u4EF6\u65F6\uFF0C\u8BB0\u5F97\u589E\u52A0\u6216\u8005\u4FEE\u6539\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u4FDD\u8BC1\u4EE3\u7801\u7684\u7A33\u5B9A"}),u("li",{children:"\u5728 PR \u4E2D\u8BF7\u6DFB\u52A0\u5408\u9002\u7684\u63CF\u8FF0\uFF0C\u5E76\u5173\u8054\u76F8\u5173\u7684 Issue"})]}),u("h3",{id:"pull-request-\u6D41\u7A0B","data-anchor":"pull-request-\u6D41\u7A0B",children:"Pull Request \u6D41\u7A0B"}),E("ol",{children:[u("li",{children:"fork \u4E3B\u4ED3\u5E93\uFF0C\u5982\u679C\u5DF2\u7ECF fork \u8FC7\uFF0C\u8BF7\u540C\u6B65\u4E3B\u4ED3\u5E93\u7684\u6700\u65B0\u4EE3\u7801"}),E("li",{children:["\u57FA\u4E8E fork \u540E\u4ED3\u5E93\u7684 ",u("code",{children:"main"})," \u5206\u652F\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6BD4\u5982 ",u("code",{children:"feat-button_color"})]}),E("li",{children:["\u5728\u65B0\u5206\u652F\u4E0A\u8FDB\u884C\u5F00\u53D1\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u63D0 Pull Request \u5230\u4E3B\u4ED3\u5E93\u7684 ",u("code",{children:"main"})," \u5206\u652F"]}),u("li",{children:"Pull Request \u4F1A\u5728 Review \u901A\u8FC7\u540E\u88AB\u5408\u5E76\u5230\u4E3B\u4ED3\u5E93"}),u("li",{children:"\u7B49\u5F85 React Vant \u53D1\u5E03\u7248\u672C"})]}),u("h3",{id:"\u540C\u6B65\u6700\u65B0\u4EE3\u7801","data-anchor":"\u540C\u6B65\u6700\u65B0\u4EE3\u7801",children:"\u540C\u6B65\u6700\u65B0\u4EE3\u7801"}),u("p",{children:"\u63D0 Pull Request \u524D\uFF0C\u8BF7\u4F9D\u7167\u4E0B\u9762\u7684\u6D41\u7A0B\u540C\u6B65\u4E3B\u4ED3\u5E93\u7684\u6700\u65B0\u4EE3\u7801\uFF1A"}),u(e,{code:`# \u6DFB\u52A0\u4E3B\u4ED3\u5E93\u5230 remote\uFF0C\u4F5C\u4E3A fork \u540E\u4ED3\u5E93\u7684\u4E0A\u6E38\u4ED3\u5E93
git remote add upstream https://github.com/3lang3/react-vant.git

# \u62C9\u53D6\u4E3B\u4ED3\u5E93\u6700\u65B0\u4EE3\u7801
git fetch upstream

# \u5408\u5E76\u4E3B\u4ED3\u5E93\u4EE3\u7801
git merge upstream/main`,lang:"bash"})]})})},F=[],d=void 0,i=[{depth:1,text:"\u5F00\u53D1\u6307\u5357",id:"\u5F00\u53D1\u6307\u5357"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u53C2\u4E0E\u5F00\u53D1",id:"\u53C2\u4E0E\u5F00\u53D1"},{depth:3,text:"\u672C\u5730\u5F00\u53D1",id:"\u672C\u5730\u5F00\u53D1"},{depth:3,text:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784"},{depth:3,text:"\u6DFB\u52A0\u65B0\u7EC4\u4EF6",id:"\u6DFB\u52A0\u65B0\u7EC4\u4EF6"},{depth:2,text:"\u63D0\u4EA4 PR",id:"\u63D0\u4EA4-pr"},{depth:3,text:"Pull Request \u89C4\u8303",id:"pull-request-\u89C4\u8303"},{depth:4,text:"\u89C4\u8303",id:"\u89C4\u8303"},{depth:3,text:"Pull Request \u6D41\u7A0B",id:"pull-request-\u6D41\u7A0B"},{depth:3,text:"\u540C\u6B65\u6700\u65B0\u4EE3\u7801",id:"\u540C\u6B65\u6700\u65B0\u4EE3\u7801"}],l="/docs/guide/contribution.md",c="\u5F00\u53D1\u6307\u5357",r="1681968688000";var o=n=>n.children({MdContent:t,demos:F,frontmatter:d,slugs:i,filePath:l,title:c,updatedTime:r});export{t as MdContent,o as default,F as demos,l as filePath,d as frontmatter,i as slugs,c as title,r as updatedTime};
