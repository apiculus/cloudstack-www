"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={layout:"post",title:"[CVE-2013-2136] Apache CloudStack Cross-site scripting (XSS) vulnerabiliity",tags:["announcement"],slug:"cve_2013_2136_apache_cloudstack"},c=void 0,l={permalink:"/blog/cve_2013_2136_apache_cloudstack",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-08-07-cve_2013_2136_apache_cloudstack.md",source:"@site/blog/2013-08-07-cve_2013_2136_apache_cloudstack.md",title:"[CVE-2013-2136] Apache CloudStack Cross-site scripting (XSS) vulnerabiliity",description:"Product: Apache CloudStack",date:"2013-08-07T00:00:00.000Z",formattedDate:"August 7, 2013",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"[CVE-2013-2136] Apache CloudStack Cross-site scripting (XSS) vulnerabiliity",tags:["announcement"],slug:"cve_2013_2136_apache_cloudstack"},prevItem:{title:"Announcing the CloudStack Collaboration Conference - Europe",permalink:"/blog/announcing_the_cloudstack_collaboration_conference"},nextItem:{title:"Apache CloudStack 4.1.1 Released",permalink:"/blog/apache_cloudstack_4_1_1"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Product: Apache CloudStack",(0,a.kt)("br",null),"Vendor: The Apache Software Foundation",(0,a.kt)("br",null),"Vulnerability Type(s): Cross-site scripting (XSS)",(0,a.kt)("br",null),"Vulnerable version(s): Apache CloudStack versions 4.0.0-incubating, 4.0.1-incubating, 4.0.2 and 4.1.0",(0,a.kt)("br",null),"CVE References: CVE-2013-2136",(0,a.kt)("br",null),"Risk Level: Low",(0,a.kt)("br",null),"CVSSv2 Base Scores: 4 (AV:N/AC:L/Au:S/C:N/I:P/A:N)"),(0,a.kt)("p",null,"Description:"),(0,a.kt)("p",null,"The Apache CloudStack Security Team was notified of an issue found in the Apache CloudStack user interface that allows an authenticated user to execute cross-site scripting attack against other users within the system."),(0,a.kt)("p",null,"Mitigation:"),(0,a.kt)("p",null,"Updating to Apache CloudStack versions 4.1.1 or higher will mitigate this vulnerability."),(0,a.kt)("p",null,"Please see the 4.1.1 release notes for further information about how to upgrade:"),(0,a.kt)("p",null,(0,a.kt)("a",{href:"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html"},"http://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.1.1/html/Release_Notes/index.html")),(0,a.kt)("p",null,"References:"),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK-2936"},"https://issues.apache.org/jira/browse/CLOUDSTACK-2936")),(0,a.kt)("p",null,"Credit:"),(0,a.kt)("p",null,"This issue was identified by Oleg Boytsev from strongserver.org."))}d.isMDXComponent=!0}}]);