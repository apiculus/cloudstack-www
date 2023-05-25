"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7739],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(o),k=l,m=d["".concat(i,".").concat(k)]||d[k]||h[k]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,s=new Array(a);s[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:l,s[1]=r;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},5796:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(7462),l=(o(7294),o(3905));const a={layout:"post",title:"Apache CloudStack Weekly News - 1 July 2013",slug:"apache_cloudstack_weekly_news_12"},s=void 0,r={permalink:"/blog/apache_cloudstack_weekly_news_12",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-07-02-apache_cloudstack_weekly_news_12.md",source:"@site/blog/2013-07-02-apache_cloudstack_weekly_news_12.md",title:"Apache CloudStack Weekly News - 1 July 2013",description:"We are half way through the year and a lot of work is done, and lot more is yet to be done. This week we look back at some of the CloudStack Collaboration Conference, work continues on 4.1.1 and 4.2.0, and we have some interesting discussions on how we should release the CloudMonkey and Marvin tools used with CloudStack. There's a by-laws vote underway to look at how and where we decide non-technical issues, and some discussion on the best way to to discuss and do code reviews.",date:"2013-07-02T00:00:00.000Z",formattedDate:"July 2, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 1 July 2013",slug:"apache_cloudstack_weekly_news_12"},prevItem:{title:"CloudStack Weekly News - 10 July 2013",permalink:"/blog/cloudstack_weekly_news_10_july"},nextItem:{title:"Apache CloudStack Weekly News - 17 June 2013",permalink:"/blog/apache_cloudstack_weekly_news_17"}},i={authorsImageUrls:[]},c=[],u={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,l.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{href:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"},(0,l.kt)("img",{src:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true",alt:"square-cloudmonkey.png",align:"left",vspace:"5",hspace:"5"})),"We are half way through the year and a lot of work is done, and lot more is yet to be done. This week we look back at some of the ",(0,l.kt)("a",{href:"http://cloudstackcollab.org/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference"),", work continues on 4.1.1 and 4.2.0, and we have some interesting discussions on how we should release the CloudMonkey and Marvin tools used with CloudStack. There's a by-laws vote underway to look at how and where we decide non-technical issues, and some discussion on the best way to to discuss and do code reviews."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-NewsMovingtoWednesdays"}),"News Moving to Wednesdays"),(0,l.kt)("p",null,"To help get information out a little more timely to key discussions and information that is going on in the community we are going to move the publishing of the weekly news to Wednesdays starting July 10th! "),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-MajorDiscussions"}),"Major Discussions"),(0,l.kt)("p",null,"In this section we look at major discussions that have happened on the CloudStack mailing lists. This is by no means a full summary of all discussions on the lists, but we try to hit the highlights that are relevant to the larger CloudStack community. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-FeatureFreezeinAffectforthe4.2Release"}),"Feature Freeze in Affect for the 4.2 Release"),(0,l.kt)("p",null,"Code Freeze in now in effect starting 6/28 and the 4.2 branch was ",(0,l.kt)("a",{href:"http://markmail.org/message/5esar2muu54nutqj",class:"external-link",rel:"nofollow"},"created on 6/29"),". There is currently no motion in the community to extend the freeze date, and Animesh Chaturvedi is keep the release on schedule. If the feature or merge you are working on was unable to make it in, please start to move it to your JIRA tickets and additional documentation to 4.3 scheduled to release sometime in December. "),(0,l.kt)("p",null,"Currently Animesh is handling the release management for 4.2 has listed out our current state. He put together an e-mail on the current ",(0,l.kt)("a",{href:"http://markmail.org/message/y47wm6t5q72ns43l",class:"external-link",rel:"nofollow"},"status of the release"),". If we don't quickly get these resolved further delays in the release and jeopardize future releases."),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"We are now just two days away from feature freeze, but still there are many open tickets. If the feature or improvement is unlikely to be wrapped up by 6/28 it should be moved out of 4.2"),(0,l.kt)("p",null,"As for bugs here is a summary for this week:"),(0,l.kt)("div",{class:"table-wrap"},(0,l.kt)("table",{class:"confluenceTable"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{class:"confluenceTh"},"Bugs"),(0,l.kt)("th",{class:"confluenceTh"},"This Week "),(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("th",{class:"confluenceTh"},"Two Week Ago    "),(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("td",{class:"confluenceTd"},"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"confluenceTd"},"\xa0"),(0,l.kt)("td",{class:"confluenceTd"},"   Blocker "),(0,l.kt)("td",{class:"confluenceTd"},"  Critical"),(0,l.kt)("td",{class:"confluenceTd"}," Major "),(0,l.kt)("td",{class:"confluenceTd"}," Total "),(0,l.kt)("td",{class:"confluenceTd"},"   Blocker "),(0,l.kt)("td",{class:"confluenceTd"}," Critical "),(0,l.kt)("td",{class:"confluenceTd"}," Major "),(0,l.kt)("td",{class:"confluenceTd"}," Total ")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"confluenceTd"}," Incoming        "),(0,l.kt)("td",{class:"confluenceTd"},"         4 "),(0,l.kt)("td",{class:"confluenceTd"},"       19 "),(0,l.kt)("td",{class:"confluenceTd"},"    37 "),(0,l.kt)("td",{class:"confluenceTd"},"     68"),(0,l.kt)("td",{class:"confluenceTd"},"         8 "),(0,l.kt)("td",{class:"confluenceTd"},"       20 "),(0,l.kt)("td",{class:"confluenceTd"},"    29 "),(0,l.kt)("td",{class:"confluenceTd"},"    60 ")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"confluenceTd"}," Outgoing        "),(0,l.kt)("td",{class:"confluenceTd"},"        19 "),(0,l.kt)("td",{class:"confluenceTd"},"       42 "),(0,l.kt)("td",{class:"confluenceTd"},"    34 "),(0,l.kt)("td",{class:"confluenceTd"},"   102 "),(0,l.kt)("td",{class:"confluenceTd"},"        18 "),(0,l.kt)("td",{class:"confluenceTd"},"       10 "),(0,l.kt)("td",{class:"confluenceTd"},"    42 "),(0,l.kt)("td",{class:"confluenceTd"},"    76 ")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"confluenceTd"}," Open Unassigned "),(0,l.kt)("td",{class:"confluenceTd"},"         4 "),(0,l.kt)("td",{class:"confluenceTd"},"       27 "),(0,l.kt)("td",{class:"confluenceTd"},"   116 "),(0,l.kt)("td",{class:"confluenceTd"},"   184 "),(0,l.kt)("td",{class:"confluenceTd"},"         7 "),(0,l.kt)("td",{class:"confluenceTd"},"       35 "),(0,l.kt)("td",{class:"confluenceTd"},"    93 "),(0,l.kt)("td",{class:"confluenceTd"},"   166 ")),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"confluenceTd"}," Open Total      "),(0,l.kt)("td",{class:"confluenceTd"},"        17 "),(0,l.kt)("td",{class:"confluenceTd"},"       62 "),(0,l.kt)("td",{class:"confluenceTd"},"   223 "),(0,l.kt)("td",{class:"confluenceTd"},"   365 "),(0,l.kt)("td",{class:"confluenceTd"},"        19 "),(0,l.kt)("td",{class:"confluenceTd"},"       74 "),(0,l.kt)("td",{class:"confluenceTd"},"   192 "),(0,l.kt)("td",{class:"confluenceTd"},"   345 ")))))),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-Progresson4.1.1Release"}),"Progress on 4.1.1 Release"),(0,l.kt)("p",null,"With 4.1 now released we are already beginning work on the 4.1.1 patch update. Ilya Musayev is the release manager for the 4.1.x branch, and has ",(0,l.kt)("a",{href:"http://markmail.org/message/6ionwrcqlh4pi2j4",class:"external-link",rel:"nofollow"},"asked")," work all merges to be completed. Once that is done, he will call for a VOTE."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-LargeMerge%2FReleaseWork"}),"Large Merge / Release Work"),(0,l.kt)("p",null,"As we seen in the past and now again in 4.2, it's important to focus on merging your features early and often. By breaking up large merge and code review requests it is possible to help keep releases on schedule, get features in before the freeze and avoid Veto votes. Alex Huang and Kelven Yang worked really hard on a new and large VMSync feature that many users need. Because it came in so close to freeze and was a large merge request with less than a week before freeze it immediately received Veto votes blocking the merge. Even with the help of several other committers the review couldn't be done in a timely fashion and miss the 4.2 cutoff."),(0,l.kt)("p",null,"When late requests come in like this it also puts undo stress on the testing of the release as well. Read through the ",(0,l.kt)("a",{href:"http://markmail.org/message/zgwtc5nzm3bpmic2",class:"external-link",rel:"nofollow"},"merge thread")," to follow the discussion on how we can improve this in the future."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-BVTAutomationTestingBreaks"}),"BVT Automation Testing Breaks"),(0,l.kt)("p",null,"After complaints that the BVT environment was broken, Alex Huang did some investigating to identify the root cause and raise a suggest on how BVT testing should be ",(0,l.kt)("a",{href:"http://markmail.org/message/si6rt2mkc7dt4krw",class:"external-link",rel:"nofollow"},"dealt with in the future"),". "),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"After Dave's complain in the vmsync ",(0,l.kt)("a",{href:"/confluence/pages/createpage.action?spaceKey=CLOUDSTACK&title=MERGE&linkCreation=true&fromPageId=31825135",class:"createlink"},"MERGE")," thread about BVT in horrible shape on master, I went around to figure out what exactly happened.  The best I can figure is that after a certain merge (I will leave out which merge as that's not important), BVT no longer runs automatically.  It was promised to be fixed and there are people who are actively fixing it but it's been in this way for about two weeks.  People running BVTs are working around the problem but it's not automated anymore and so it's no longer running on master.  I understand people are nice and tried to be accommodating to other people by working around the problem but sometimes we just have to be an arse.  So let me be that arse..."),(0,l.kt)("p",null,"New Rule....",(0,l.kt)("br",null),"If BVT or automated regression tests break on master or any release branch, we revert all commits that broke it.  It doesn't matter if they promise to fix it within the next hour.  If it's broken, the release manager will revert the commits and developers must resubmit.  It sounds mean but it's the only way this problem can be fixed.  "),(0,l.kt)("p",null,"To avoid having a bunch of reverts and resubmits, the developers should be able to request that BVT run on their branch and don't merge until BVT on their branch is at 100%.  We will work on figuring out how to do that.")),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-CloudMonkeyandPyPIReleases"}),"CloudMonkey and PyPI Releases"),(0,l.kt)("p",null,"On June 9th, Rohit Yadav asked about a problem with the 4.1.0-0 CloudMonkey release on PyPI lacking the fail safe API cache. Starting a discussion about the future of how to treat ",(0,l.kt)("a",{href:"http://markmail.org/message/vq3sqf7o3nckdy5p",class:"external-link",rel:"nofollow"},"CloudMonkey and Marvin"),"."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Follow-up")," - Rohit and David Nalley have since moved CloudStack CloudMonkey out to its own Git Repository and version based off the continuing conversation through last week. No decisions have been made yet in regards to Marvin and if community members have an opinion are encouraged to join the ",(0,l.kt)("a",{href:"http://markmail.org/message/vq3sqf7o3nckdy5p",class:"external-link",rel:"nofollow"},"discussion"),". "),(0,l.kt)("p",null,"A Vote on final adoption of the move of CloudMonkey is now underway. Please join in the ",(0,l.kt)("a",{href:"http://markmail.org/message/gbnlv6i3gltghmdx",class:"external-link",rel:"nofollow"},"Vote thread.")),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-JavaandTomcatversionupgrades"}),"Java and Tomcat version upgrades"),(0,l.kt)("p",null,"As we continue to work on improving CloudStack, there are additional upgrades to the tools that we use to bring CloudStack to life. Hugo Trippaers started the ",(0,l.kt)("a",{href:"http://markmail.org/message/yuonvnahlzx5ga6k",class:"external-link",rel:"nofollow"},"discussion")," on support for Java 1.7 and Tomcat 7. Please join in the discussion as it will have affect development of future versions of CloudStack."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-Votestartstodeterminewherenontechnicalmattersaredecidedon"}),"Vote starts to determine where non-technical matters are decided on"),(0,l.kt)("p",null,"In previous discussion about publishing books about CloudStack on the ",(0,l.kt)("a",{href:"http://CloudStack.Apache.Org",class:"external-link",rel:"nofollow"},"CloudStack.Apache.Org")," page, Sebastien Goasguen noted that there's a question about voting on a list that isn't dev@:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"...",(0,l.kt)("br",null),"Our bylaws (1) do not cover votes on non-technical matters, so while we have",(0,l.kt)("br",null),"lazy majority on this vote it seems that this situation is not covered by the",(0,l.kt)("br",null),"bylaws. Moreover section 3.1.1 of bylaws says that decisions on the project",(0,l.kt)("br",null),"happen on dev@, so it seems that votes even on marketing@ are not allowed",(0,l.kt)("br",null),"(unsure about this).",(0,l.kt)("br",null),"... ")),(0,l.kt)("p",null,"Based off this, Noah Slater has ",(0,l.kt)("a",{href:"http://markmail.org/message/5i7kp6pnmdfv3q5r",class:"external-link",rel:"nofollow"},"proposed new language")," to the by-laws to help improve our ability to manage such decisions."),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"...",(0,l.kt)("br",null),"Summary of changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",null,'Addition of "3.4.2. Non-Technical Decisions" section. This specifies that',(0,l.kt)("br",null),"non-technical decisions can be made on any appropriate list (i.e. marketing@)",(0,l.kt)("br",null),"and also allows us to vote on them with lazy 2/3 majority."),(0,l.kt)("li",null,'Changed "The vote must occur on a project development mailing list." to',(0,l.kt)("br",null),'"The vote must occur on the project development mailing list." in several',(0,l.kt)("br",null),"places. This makes it explicit that these decisions must be made on",(0,l.kt)("br",null),"the dev@list."),(0,l.kt)("li",null,"Minor rewordings, typographical changes, corrections, section",(0,l.kt)("br",null),"renumbering, etc.",(0,l.kt)("br",null),"..."))),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-CloudStackPlanet"}),"CloudStack Planet"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-GoogleSummerofCodeUpdate"}),"Google Summer of Code Update"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.google-melange.com/gsoc/homepage/google/gsoc2013",class:"external-link",rel:"nofollow"},"Google Summer of Code (GSOC)"))," has been headed up by Sebastien Goasguen, bringing 5 young developers and their projects to the CloudStack community.The ",(0,l.kt)("a",{href:"http://markmail.org/message/dczqcoortvic7cpc?q",class:"external-link",rel:"nofollow"},"Community Bonding period")," was to help introduce them to the community and their ideas and help them get acquainted with procedures and systems.")),(0,l.kt)("p",null,"We now enter the ",(0,l.kt)("a",{href:"http://markmail.org/search/?q",class:"external-link",rel:"nofollow"},"work period")," and get going on these proposals. Please help them as they try to help improve Apache CloudStack."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-CloudStackCommunitySurveyUnderway"}),"CloudStack Community Survey Underway"),(0,l.kt)("p",null,'Please let your voice and your organization be heard in this short survey. We would like to have both users of the Apache CloudStack source and Commercial derivatives, "We will be using the data in ',(0,l.kt)("b",null,"aggregate")," to get to know more about how it's being deployed out there.\" Chip Childers ",(0,l.kt)("a",{href:"http://markmail.org/message/7s3ev7leok7uxucb?q",class:"external-link",rel:"nofollow"},"commented"),". Click ",(0,l.kt)("a",{href:"https://www.surveymonkey.com/s/28BV97D",class:"external-link",rel:"nofollow"},"Here")," to take the short survey."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-CloudStackCommunityVotestoPublishCloudStackBookList"}),"CloudStack Community Votes to Publish CloudStack Book List"),(0,l.kt)("p",null,"In a heavily ",(0,l.kt)("a",{href:"http://markmail.org/message/jwoaknt7mdveklxp?q",class:"external-link",rel:"nofollow"},"discussed")," topic throughout the community to allow the publishing of outside books about CloudStack on the CloudStack.Apache.Org website or wiki, it was finally voted on and decided to allow outside publications to be published. Right now Sebastien Goasguen has setup a ",(0,l.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books",class:"external-link",rel:"nofollow"},"wiki page")," and will work on where to have the permanent placement for this page. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-AVideographerisWorkingwithCloudStacktoCreateVideosfortheProject"}),"A Videographer is Working with CloudStack to Create Videos for the Project"),(0,l.kt)("p",null,"Gregg Witkin and Jessica Tomechak are ",(0,l.kt)("a",{href:"http://markmail.org/thread/rs7paw6wfs4kktwh",class:"external-link",rel:"nofollow"},"working together on videos this summer"),", including one that aims to show some of the most interesting real-world applications of CloudStack. They're asking for participation on this video, and suggestions for other videos you'd like to see. Check out these videos Gregg did with CloudStack just last year. ",(0,l.kt)("a",{href:"http://www.youtube.com/watch?v=oJ4b8HFmFTc",class:"external-link",rel:"nofollow"},"Link 1"),", ",(0,l.kt)("a",{href:"http://www.youtube.com/watch?v=KATuxn5pimY",class:"external-link",rel:"nofollow"},"Link 2")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-Events"}),"Events"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-CloudStackCollaborationConference2013"}),"CloudStack Collaboration Conference 2013"),(0,l.kt)("p",null,"If you're not able to join, all sessions are being recorded and will be available after the conference for viewing."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"The Hack Day was a great success with several tables opening up and a lot of conversations flowing. There were large conversations in storage, mindshare/marketing, documentation and several others. Each group is encouraged to share their collaborations with the rest of the community."),(0,l.kt)("li",null,(0,l.kt)("a",{href:"http://www.cloudstackcollab.org/keynotes/keynote2/",class:"external-link",rel:"nofollow"},"Chip Childers")," kicked off the conference on Monday, June 24th, 2013 with a state of a strong and busy community. He talked about how much we have accomplished in the time that we have been in the Apache Foundation and the great work that is upcoming. Chip's presentation is up on ",(0,l.kt)("a",{href:"http://www.slideshare.net/chipchilders/cloudstack-collab-2013-keynote",class:"external-link",rel:"nofollow"},"slideshare")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"http://www.cloudstackcollab.org/keynote1/",class:"external-link",rel:"nofollow"},"Gene Kim's")," keynote gave us an insight into Devops and the ability of IT to work in a different way and more function ways.Aaron Delp wrote a blog on the opening keynotes. Read it ",(0,l.kt)("a",{href:"http://itknowledgeexchange.techtarget.com/open-clouds/cloudstack-opening-keynote-live-blog/",class:"external-link",rel:"nofollow"},"here")),(0,l.kt)("li",null,"Adrian Cockcroft\u2019s delivered a great keynote closing the conference talking about ",(0,l.kt)("a",{href:"http://www.cloudstackcollab.org/keynotes/keynote3/",class:"external-link",rel:"nofollow"},"\u201cDystopia as a Service\u201d")," on Tuesday."),(0,l.kt)("li",null,"There were so many amazing presentations! They were all recorded and will be available shortly on the BuildACloud.org website. We will let you know when it's available."),(0,l.kt)("li",null,"The tweeters were busy during the conference! Check out the ",(0,l.kt)("a",{href:"https://twitter.com/search/%23CCC13",class:"external-link",rel:"nofollow"},"#CCC13 Tag")," for a lot of info from the conference."),(0,l.kt)("li",null,(0,l.kt)("b",null,"Want to win $10,000?")," That's right, Citrix has offered a $10,000 bounty for the first person to get Netflix OSS Tool to work on CloudStack! ",(0,l.kt)("a",{href:"https://twitter.com/mrhinkle",class:"external-link",rel:"nofollow"},"Mark Hinkle")," made the announcement during the closing keynote."),(0,l.kt)("li",null,"Here's some links to many of the pictures taken: ",(0,l.kt)("a",{href:"https://www.icloud.com/photostream/#A2532OdWwFsrj",class:"external-link",rel:"nofollow"},"link"),", ",(0,l.kt)("a",{href:"http://www.flickr.com/photos/encoreopus/sets/72157634290835546/",class:"external-link",rel:"nofollow"},"link"),", ",(0,l.kt)("a",{href:"http://www.flickr.com/photos/encoreopus/sets/72157634304416585/",class:"external-link",rel:"nofollow"},"link"),", ",(0,l.kt)("a",{href:"http://www.flickr.com/groups/2277952@N22/",class:"external-link",rel:"nofollow"},"link"),", ",(0,l.kt)("a",{href:"http://share.shutterfly.com/action/welcome?sid=0QcMmrdy3bNmHc",class:"external-link",rel:"nofollow"},"link"))),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-MoreEvents"}),"More Events"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.eventbrite.com/event/6727182183",class:"external-link",rel:"nofollow"},"CloudStack European User Group meeting"))," being held in London, UK on July 4."),(0,l.kt)("li",null,(0,l.kt)("b",null,(0,l.kt)("a",{href:"http://www.oscon.com/oscon2013",class:"external-link",rel:"nofollow"},"O'Reilly's Open Source Convention (OSCON)"))," is being held July 22-26 at Oregon Convention Center, Portland Oregon. There will be several CloudStack talks."),(0,l.kt)("li",null,(0,l.kt)("b",null,"CloudStack Study Meeting")," Suzuki-san will be organizing a study meeting in Osaka on August 2."),(0,l.kt)("li",null,"*",(0,l.kt)("a",{href:"http://www.ospn.jp/osc2012-kyoto/",class:"external-link",rel:"nofollow"},"OSC Kyoto")," The ",(0,l.kt)("a",{href:"http://cloudstack.jp/",class:"external-link",rel:"nofollow"},"Japanese CloudStack User Group (JCSUG)")," will be presenting at the Open Source Conference in Kyoto on August 2-3.")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-1July2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Mike Tutkowski has been invited by the PMC to become a committer and ",(0,l.kt)("a",{href:"http://http://markmail.org/message/7bma6ph2r3ijrxuv?q",class:"external-link",rel:"nofollow"},"has accepted"),".")))}h.isMDXComponent=!0}}]);