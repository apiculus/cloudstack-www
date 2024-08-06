"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(a),d=l,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||c;return a?r.createElement(m,n(n({ref:t},u),{},{components:a})):r.createElement(m,n({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=a.length,n=new Array(c);n[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,n[1]=o;for(var i=2;i<c;i++)n[i]=a[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61041:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),l=a(67294),c=a(3905);const n=["4.19.1.1","4.19.1.0","4.19.0.2","4.19.0.1","4.19.0.0","4.18.2.3","4.18.2.2","4.18.2.1","4.18.2.0","4.18.1.1","4.18.1.0","4.18.0.0","4.17.2.0","4.17.1.0","4.17.0.1","4.17.0.0","4.16.1.1","4.16.1.0","4.16.0.0","4.15.2.0","4.15.1.0","4.15.0.0","4.14.1.0","4.14.0.0","4.13.1.0","4.13.0.0","4.12.0.0","4.11.3.0","4.11.2.0","4.11.1.0","4.11.0.0","4.10.0.0","4.9.3.1","4.9.3.0","4.9.2.0","4.9.1.0","4.9.0.1","4.9.0","4.8.1.1","4.8.1","4.8.0.1","4.8.0","4.7.1.1","4.7.1","4.7.0","4.6.2.1","4.6.2","4.6.1","4.6.0","4.5.2.1","4.5.2","4.5.1","4.4.4","4.4.0","4.3.2","4.3.1","4.3.0","4.2.1","4.2.0","4.1.1","4.1.0","4.0.2","4.0.1-incubating","4.0.0-incubating"];function o(){const e=n.map((e=>function(e){const t=`apache-cloudstack-${e}`,a=`https://archive.apache.org/dist/cloudstack/releases/${e}/${t}-src.tar.bz2`;return{name:t,archive:a,signature:`${a}.asc`,checksum:`${a}.sha512`}}(e)));return l.createElement(l.Fragment,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,l.createElement("b",null,"Name")),l.createElement("th",null,l.createElement("b",null,"Archive")),l.createElement("th",null,l.createElement("b",null,"Signature")),l.createElement("th",null,l.createElement("b",null,"Checksum")))),l.createElement("tbody",null,e.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,e.name),l.createElement("td",null,l.createElement("a",{href:e.archive},"tarball")),l.createElement("td",null,l.createElement("a",{href:e.signature},"asc")),l.createElement("td",null,l.createElement("a",{href:e.checksum},"sha512"))))))))}const s={title:"Apache CloudStack Downloads"},i="Archived Releases",u={type:"mdx",permalink:"/archives",source:"@site/src/pages/archives.mdx",title:"Apache CloudStack Downloads",description:"CloudStack Releases Archive",frontMatter:{title:"Apache CloudStack Downloads"}},p=[{value:"CloudStack Releases Archive",id:"cloudstack-releases-archive",level:2},{value:"CloudMonkey Releases Archive",id:"cloudmonkey-releases-archive",level:2},{value:"Other",id:"other",level:2}],h={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,c.kt)(d,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"archived-releases"},"Archived Releases"),(0,c.kt)("h2",{id:"cloudstack-releases-archive"},"CloudStack Releases Archive"),(0,c.kt)(o,{mdxType:"Releases"}),(0,c.kt)("h2",{id:"cloudmonkey-releases-archive"},"CloudMonkey Releases Archive"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.4.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.4.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.3.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.3.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.2.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.2.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.1.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.1.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.0.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-6.0.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.3/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.3/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.2/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.2/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.1/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.1/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.3.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.2.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.2.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.1.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.1.0/")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.0.0/"},"https://archive.apache.org/dist/cloudstack/releases/cloudmonkey-5.0.0/"))),(0,c.kt)("h2",{id:"other"},"Other"),(0,c.kt)("p",null,"Releases of CloudStack as a Citrix project prior to the project's acceptance\ninto the incubator can be found on SourceForge.net. Please note the releases\nlisted below are NOT Apache project releases. These\nlinks are being provided to the user community, as a convenience only:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"http://sourceforge.net/projects/cloudstack/files/CloudStack%20Acton/3.0.2/CloudStack-oss-3.0.2-1-rhel6.2.tar.gz/download"},"Binaries for Red Hat Enterprise Linux 6.2 and CentOS 6.2")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"http://sourceforge.net/projects/cloudstack/files/CloudStack%20Acton/3.0.2/CloudStack-oss-3.0.2-1-ubuntu10.04.tar.gz/download"},"Binaries for Ubuntu 10.04 LTS"))))}m.isMDXComponent=!0}}]);