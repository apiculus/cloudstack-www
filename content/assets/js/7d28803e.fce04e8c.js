"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={layout:"post",title:"Two late-announced security advisories",slug:"two_late_announced_security_advisories"},i=void 0,s={permalink:"/blog/two_late_announced_security_advisories",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2016-02-05-two_late_announced_security_advisories.md",source:"@site/blog/2016-02-05-two_late_announced_security_advisories.md",title:"Two late-announced security advisories",description:"Today I sent out two CloudStack-related security advisories: CVE-2015-3251 (related to VM credential exposure) and CVE-2015-3252 (related to VNC authentication). Details about these issues can be found on the CloudStack user and dev mailing lists, as well as on the Full Disclosure and BUGTRAQ security mailing lists.",date:"2016-02-05T00:00:00.000Z",formattedDate:"February 5, 2016",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{layout:"post",title:"Two late-announced security advisories",slug:"two_late_announced_security_advisories"},prevItem:{title:"Apache CloudStack\u2122 Collab Conference for June 2016",permalink:"/blog/apache_cloudstack_collab_conference_for"},nextItem:{title:"Apache CloudStack 4.6 is released",permalink:"/blog/apache_cloudstack_4_6_is"}},l={authorsImageUrls:[]},u=[],c=(d="H2",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const p={toc:u},h="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Today I sent out two CloudStack-related security advisories: CVE-2015-3251 (related to VM credential exposure) and CVE-2015-3252 (related to VNC authentication). Details about these issues can be found on the CloudStack user and dev mailing lists, as well as on the Full Disclosure and BUGTRAQ security mailing lists."),(0,n.kt)("p",null,"While these vulnerabilities are of moderate and low severity (respectively), the reason for this post is because the advisories were announced approximately 5 months after the first release of the patches in 4.5.2. This is personally embarrassing, unacceptable, and in a more severe case could be downright dangerous."),(0,n.kt)(c,{mdxType:"H2"},"What happened?"),(0,n.kt)("p",null,"The CloudStack security team worked through the related vulnerabilities through the summer of 2015. We had advisory drafts, patches, and mitigations all ready well before the release. Far enough ahead, actually, that we forgot about the release and weren't paying attention to the release (at least I wasn't - I know others were), and didn't send out the advisories at the appropriate time. Part of this is due to me having become an unofficial lead/spokesperson for the security team; In the past there has been at least one occasion when others released advisories when I was not available, but usually I'm coordinating issues and publishing announcements."),(0,n.kt)("p",null,"Luckily, the CloudStack Security Team works with and under the direction of the ASF security team. During one of their periodic reviews, they noticed CloudStack had loose ends on these two advisories, and asked for an update. Earlier today I realized the advisories had not been released, so here we are. "),(0,n.kt)(c,{mdxType:"H2"},"How will we improve?"),(0,n.kt)("p",null,"Obviously, we don't want to be in this situation again. Here's some steps we're taking to minimize the chance of a repeat performance:"),(0,n.kt)("ul",null,(0,n.kt)("li",null," I've modified the ",(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Release+Procedure"},"Release Procedure")," to specifically request the release manager give the security team a heads up that a release is about to be announced. This can be a simple non-blocking email that shouldn't slow down the release process, but still ensure that we're aware of the upcoming release."),(0,n.kt)("li",null,"I'll be ensuring that other members of the security team feel comfortable crafting and releasing advisories. Like the rest of CloudStack and other ASF projects, the CloudStack security team does not have a named leader and should be able to operate if I or others are unavailable.")),(0,n.kt)("p",null,"In the past I've referred to CloudStack as \"critical infrastructure\" - CloudStack powers infrastructure clouds for many large cloud providers. We take information security seriously, realizing that many depend upon our work. Vulnerabilities happen in most software at some point in time - the important part is how they are responded to. While in this case we did respond quickly to the issues and created and applied patches, we let the community down by not quickly releasing the advisories. This is an unfortunate chink in our armor, but we'll be taking steps to ensure it doesn't happen again."))}m.isMDXComponent=!0}}]);