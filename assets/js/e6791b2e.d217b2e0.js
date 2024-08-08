"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={layout:"post",title:"[ADVISORY] Apache CloudStack LTS Security Releases 4.18.2.3 and 4.19.1.1",tags:["announcement"],authors:["nicolas"],slug:"security-release-advisory-4.19.1.1-4.18.2.3"},s=void 0,l={permalink:"/blog/security-release-advisory-4.19.1.1-4.18.2.3",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2024-08-06-security-release-advisory-4.19.1.1-4.18.2.3/index.md",source:"@site/blog/2024-08-06-security-release-advisory-4.19.1.1-4.18.2.3/index.md",title:"[ADVISORY] Apache CloudStack LTS Security Releases 4.18.2.3 and 4.19.1.1",description:"Apache CloudStack project announces the release of LTS security releases",date:"2024-08-06T00:00:00.000Z",formattedDate:"August 6, 2024",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Nicolas Vazquez",title:"PMC Member",url:"https://github.com/nvazquez",imageURL:"https://github.com/nvazquez.png",key:"nicolas"}],frontMatter:{layout:"post",title:"[ADVISORY] Apache CloudStack LTS Security Releases 4.18.2.3 and 4.19.1.1",tags:["announcement"],authors:["nicolas"],slug:"security-release-advisory-4.19.1.1-4.18.2.3"},nextItem:{title:"Apache CloudStack 4.19.1.0 Release",permalink:"/blog/cloudstack-4.19.1.0-release"}},i={authorsImageUrls:[void 0]},c=[{value:"CVE-2024-42062: User Key Exposure to Domain Admins",id:"cve-2024-42062-user-key-exposure-to-domain-admins",level:2},{value:"CVE-2024-42222: Unauthorised Network List Access",id:"cve-2024-42222-unauthorised-network-list-access",level:2},{value:"Credits",id:"credits",level:2},{value:"Affected versions:",id:"affected-versions",level:2},{value:"Resolution",id:"resolution",level:2},{value:"Downloads and Documentation",id:"downloads-and-documentation",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/security-release-advisory-4.19.1.1-4.18.2.3"},(0,o.kt)("img",{src:a(58171).Z,title:"Apache CloudStack LTS Security Releases 4.18.2.3 and 4.19.1.1",width:"1200",height:"628"}))),(0,o.kt)("p",null,"Apache CloudStack project announces the release of LTS security releases\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack/releases/tag/4.18.2.3"},"4.18.2.3")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack/releases/tag/4.19.1.1"},"4.19.1.1")," that\naddress CVE-2024-42062 and CVE-2024-42222, both of severity rating 'critical',\nexplained below."),(0,o.kt)("h2",{id:"cve-2024-42062-user-key-exposure-to-domain-admins"},(0,o.kt)("a",{parentName:"h2",href:"https://www.cve.org/CVERecord?id=CVE-2024-42062"},"CVE-2024-42062"),": User Key Exposure to Domain Admins"),(0,o.kt)("p",null,"CloudStack account-users by default use username and password based\nauthentication for API and UI access. Account-users can generate and\nregister randomised API and secret keys and use them for the purpose\nof API-based automation and integrations. Due to access permission\nvalidation issue that affects Apache CloudStack versions 4.10.0 upto\n4.19.1.0, domain admin accounts were found to be able to query all\nregistered account-users API and secret keys in an environment\nincluding that of a root admin. An attacker who has domain admin\naccess, can exploit this to gain root admin and other-account\nprivileges and perform malicious operations that can result in\ncompromise of resources integrity and confidentiality, data loss,\ndenial of service and availability of CloudStack managed\ninfrastructure."),(0,o.kt)("h2",{id:"cve-2024-42222-unauthorised-network-list-access"},(0,o.kt)("a",{parentName:"h2",href:"https://www.cve.org/CVERecord?id=CVE-2024-42222"},"CVE-2024-42222"),": Unauthorised Network List Access"),(0,o.kt)("p",null,"In Apache CloudStack 4.19.1.0, a regression in the network listing API\nallows unauthorised list access of network details for domain admin\nand normal user accounts. This vulnerability compromises tenant\nisolation, potentially leading to unauthorised access to network\ndetails, configurations and data."),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"The CVEs are credited to the following reporters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CVE-2024-42062:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fabricio Duarte"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CVE-2024-42222:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Christian Gross of Netcloud AG"),(0,o.kt)("li",{parentName:"ul"},"Midhun Jose")))),(0,o.kt)("h2",{id:"affected-versions"},"Affected versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CVE-2024-42062 affects the following versions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache CloudStack 4.10.0 through 4.18.2.2"),(0,o.kt)("li",{parentName:"ul"},"Apache CloudStack 4.19.0.0 through 4.19.1.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CVE-2024-42222 affect the following version:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache CloudStack 4.19.1.0")))),(0,o.kt)("h2",{id:"resolution"},"Resolution"),(0,o.kt)("p",null,"Users are recommended to upgrade to version 4.18.2.3, 4.19.1.1 or later, which\naddresses these issues. Additionally, users on a version older than 4.19.1.0 are\nadvised to skip 4.19.1.0 and upgrade to 4.19.1.1 instead. To maintain the\nsecurity of their environment, users are advised to regenerate all existing user\nkeys."),(0,o.kt)("h2",{id:"downloads-and-documentation"},"Downloads and Documentation"),(0,o.kt)("p",null,"The official source code for the 4.18.2.3 and 4.19.1.1 releases can be\ndownloaded from the project downloads page:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudstack.apache.org/downloads"},"https://cloudstack.apache.org/downloads")),(0,o.kt)("p",null,"The 4.18.2.3 and 4.19.1.1 release notes can be found at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cloudstack.apache.org/en/4.18.2.3/releasenotes/about.html"},"https://docs.cloudstack.apache.org/en/4.18.2.3/releasenotes/about.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cloudstack.apache.org/en/4.19.1.1/releasenotes/about.html"},"https://docs.cloudstack.apache.org/en/4.19.1.1/releasenotes/about.html"))),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors\nhave also made release packages available on the Apache CloudStack\ndownload page, and available at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://download.cloudstack.org/el/7/"},"https://download.cloudstack.org/el/7/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://download.cloudstack.org/el/8/"},"https://download.cloudstack.org/el/8/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://download.cloudstack.org/el/9/"},"https://download.cloudstack.org/el/9/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://download.cloudstack.org/suse/15/"},"https://download.cloudstack.org/suse/15/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://download.cloudstack.org/ubuntu/dists/"},"https://download.cloudstack.org/ubuntu/dists/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.shapeblue.com/cloudstack-packages/"},"https://www.shapeblue.com/cloudstack-packages/"))))}p.isMDXComponent=!0},58171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-080e065daf7d0c0b191adce4874a0828.png"}}]);