"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(l,".").concat(f)]||s[f]||h[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41529:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Apache CloudStack Security"},i=void 0,c={type:"mdx",permalink:"/security",source:"@site/src/pages/security.md",title:"Apache CloudStack Security",description:"Apache CloudStack: Security",frontMatter:{title:"Apache CloudStack Security"}},l=[],u={toc:l},p="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Apache CloudStack: Security"),(0,a.kt)("h2",null,"Security Model"),(0,a.kt)("p",null,"The Apache CloudStack project understands that as a core infrastructure project,\nthe application security of Apache CloudStack is of critical importance to the\ncommunity and users."),(0,a.kt)("p",null,"It is important to know that the project can not guarantee that it will be secure with\nthe following usages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"share access to the DataBase"),(0,a.kt)("li",{parentName:"ul"},"share database dumps or other forms of backups"),(0,a.kt)("li",{parentName:"ul"},"share log files"),(0,a.kt)("li",{parentName:"ul"},"use any of ",(0,a.kt)("a",{parentName:"li",href:"integrations"},"the third party integration components"),", that are meant for monitoring, storage, network and more.")),(0,a.kt)("p",null,"That said, the project will work with any one on improving the secure\nuse of the software it provides, with any 3rd party integration\nvendors or users of the software. This can be done on public github\nissues or confidentially if so desired."),(0,a.kt)("h2",null,"Reporting Potential Vulnerabilities in Apache CloudStack"),(0,a.kt)("p",null,"If you've found an issue that you believe is a security vulnerability in a\nreleased version of CloudStack, please report it to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/security/"},"ASF security\nteam")," via email to\n",(0,a.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org")," with details about the\nvulnerability, how it might be exploited, and any additional information that\nmight be useful."),(0,a.kt)("p",null,"Upon notification, the ASF security team will work with the CloudStack PMC\nthrough validation and fixing the issue. If the issue is validated, it generally\ntakes 2-4 weeks from notification to public announcement of the vulnerability.\nDuring this time, the team will communicate with you as they proceed through the\nresponse procedure, and ask that the issue not be announced before an\nagreed-upon date."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please do not create publicly-viewable JIRA tickets related to the issue"),". If\nvalidated, a JIRA ticket with the security flag set will be created for tracking\nthe issue in a non-public manner, and made public at the appropriate time."),(0,a.kt)("h2",null,"Procedure for Responding to Potential Security Issues"),(0,a.kt)("p",null,"We're follow the Apache Security Team's procedures documented\n",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/security/committers.html"},"here"),"."),(0,a.kt)("h2",null,"For further information"),(0,a.kt)("p",null,"Further information about Apache CloudStack's security practices can be found in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Security"},"CloudStack Security wiki\npage"),"."))}s.isMDXComponent=!0}}]);