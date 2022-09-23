"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Timeline_vue"],{35032:(n,t,e)=>{e.d(t,{Z:()=>l});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,".album-picker[data-v-c27aa5aa]{padding:32px;padding-top:16px}.album-picker h2[data-v-c27aa5aa]{display:flex;align-items:center;height:60px}.album-picker h2 .loading-icon[data-v-c27aa5aa]{margin-left:32px}.album-picker .albums-container[data-v-c27aa5aa]{min-height:150px;max-height:350px;overflow-x:scroll;padding:2px}.album-picker .albums-container .album[data-v-c27aa5aa]  .list-item{padding:8px 16px;box-sizing:border-box}.album-picker .albums-container .album[data-v-c27aa5aa]:not(:last-child){margin-bottom:16px}.album-picker .albums-container .album__image[data-v-c27aa5aa]{width:40px;height:40px;object-fit:none;border-radius:var(--border-radius)}.album-picker .albums-container .album__image--placeholder[data-v-c27aa5aa]{background:var(--color-primary-light)}.album-picker .albums-container .album__image--placeholder[data-v-c27aa5aa]  .material-design-icon{width:100%;height:100%}.album-picker .albums-container .album__image--placeholder[data-v-c27aa5aa]  .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.album-picker .new-album-button[data-v-c27aa5aa]{margin-top:32px}","",{version:3,sources:["webpack://./src/components/Albums/AlbumPicker.vue"],names:[],mappings:"AA6HA,+BACC,YAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,gDACC,gBAAA,CAIF,iDACC,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAIC,oEACC,gBAAA,CACA,qBAAA,CAGD,yEACC,kBAAA,CAGD,+DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,kCAAA,CAEA,4EACC,qCAAA,CAEA,mGACC,UAAA,CACA,WAAA,CAEA,8HACC,yBAAA,CAQN,iDACC,eAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album-picker {\n\tpadding: 32px;\n\tpadding-top: 16px;\n\n\th2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 60px;\n\n\t\t.loading-icon {\n\t\t\tmargin-left: 32px;\n\t\t}\n\t}\n\n\t.albums-container {\n\t\tmin-height: 150px;\n\t\tmax-height: 350px;\n\t\toverflow-x: scroll;\n\t\tpadding: 2px;\n\n\t\t.album {\n\n\t\t\t::v-deep .list-item {\n\t\t\t\tpadding: 8px 16px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\n\t\t\t&__image {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tobject-fit: none;\n\t\t\t\tborder-radius: var(--border-radius);\n\n\t\t\t\t&--placeholder {\n\t\t\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t\t\t::v-deep .material-design-icon {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\n\t\t\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.new-album-button {\n\t\tmargin-top: 32px;\n\t}\n}\n'],sourceRoot:""}]);const l=a},73934:(n,t,e)=>{e.d(t,{Z:()=>l});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,".timeline[data-v-302f95b0]{display:flex;flex-direction:column}.timeline__header__left[data-v-302f95b0]{display:flex}.timeline__file-list[data-v-302f95b0]{padding:0 64px}@media only screen and (max-width: 1200px){.timeline__file-list[data-v-302f95b0]{padding:0 4px}}.timeline__file-list[data-v-302f95b0]  .files-list-viewer__section-header{top:var(--photos-navigation-height)}","",{version:3,sources:["webpack://./src/views/Timeline.vue"],names:[],mappings:"AAkRA,2BACC,YAAA,CACA,qBAAA,CAGC,yCACC,YAAA,CAIF,sCACC,cAAA,CAEA,2CAHD,sCAIE,aAAA,CAAA,CAGD,0EACC,mCAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.timeline {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__header {\n\t\t&__left {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\n\t\t::v-deep .files-list-viewer__section-header {\n\t\t\ttop: var(--photos-navigation-height);\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const l=a},2470:(n,t,e)=>{e.d(t,{Z:()=>o});const i={name:"DownloadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon download-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},36288:(n,t,e)=>{e.d(t,{Z:()=>o});const i={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},79906:(n,t,e)=>{e.d(t,{Z:()=>c});var i=e(20629),o=e(79753);function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){l(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const s={name:"ActionDownload",components:{NcActionLink:e(33476).NcActionLink},props:{title:{type:String,required:!0},selectedFileIds:{type:Array,required:!0}},computed:a(a({},(0,i.Se)(["files"])),{},{downloadUrl:function(){var n=new URLSearchParams,t=this.fileNames.map((function(n){return"/"+n.split("/").splice(3).join("/")}));return n.append("files",JSON.stringify(t)),(0,o.generateUrl)("/apps/files/ajax/download.php?".concat(n))},fileNames:function(){var n=this;return this.selectedFileIds.map((function(t){return n.files[t].filename}))}})};const c=(0,e(51900).Z)(s,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("NcActionLink",{attrs:{"close-after-click":!0,href:n.downloadUrl,download:n.downloadUrl,"aria-label":n.title}},[n._v("\n\t"+n._s(n.title)+"\n\t"),n._t("icon",null,{slot:"icon"})],2)}),[],!1,null,null,null).exports},60627:(n,t,e)=>{e.d(t,{Z:()=>p});var i=e(20629),o=e(75760),r=e(33476);function a(n,t,e,i,o,r,a){try{var l=n[r](a),s=l.value}catch(n){return void e(n)}l.done?t(s):Promise.resolve(s).then(i,o)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function l(n){a(r,i,o,l,s,"next",n)}function s(n){a(r,i,o,l,s,"throw",n)}l(void 0)}))}}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const m={name:"ActionFavorite",components:{Star:o.default,NcActionButton:r.NcActionButton},props:{selectedFileIds:{type:Array,required:!0}},computed:c(c({},(0,i.Se)(["files"])),{},{shouldFavoriteSelection:function(){var n=this;return this.selectedFileIds.some((function(t){return 0===n.files[t].favorite}))}}),methods:c(c({},(0,i.nv)(["toggleFavoriteForFiles"])),{},{favoriteSelection:function(){var n=this;return l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:1});case 2:case"end":return t.stop()}}),t)})))()},unFavoriteSelection:function(){var n=this;return l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:0});case 2:case"end":return t.stop()}}),t)})))()}})};const p=(0,e(51900).Z)(m,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.shouldFavoriteSelection?e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Mark selection as favorite")},on:{click:n.favoriteSelection}},[n._v("\n\t"+n._s(n.t("photos","Add selection to favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1):e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Remove selection from favorites")},on:{click:n.unFavoriteSelection}},[n._v("\n\t"+n._s(n.t("photos","Remove selection from favorites"))+"\n\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1)}),[],!1,null,null,null).exports},93523:(n,t,e)=>{e.r(t),e.d(t,{default:()=>J});var i=e(20629),o=e(40502),r=e(33691);const a={name:"PlusBoxMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var l=e(51900);const s=(0,l.Z)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon plus-box-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports;var c=e(2470),u=e(33476),m=e(80351),p=e.n(m),d=e(3301),f=e(66951),A=e(28391),b=e(98171),g=e(89375),h=e(70595),v=e(99954),C=e(36288),_=e(79753),y=e(12945);const w={name:"AlbumPicker",components:{Plus:o.Z,ImageMultiple:C.Z,NcButton:u.NcButton,NcListItem:u.NcListItem,NcLoadingIcon:u.NcLoadingIcon,AlbumForm:v.Z},filters:{toCoverUrl:function(n){return(0,_.generateUrl)("/apps/photos/api/v1/preview/".concat(n,"?x=",64,"&y=",64))}},mixins:[y.Z],data:function(){return{showAlbumCreationForm:!1}},methods:{albumCreatedHandler:function(){this.showAlbumCreationForm=!1,this.fetchAlbums()},pickAlbum:function(n){this.$emit("album-picked",n)}}};var k=e(93379),x=e.n(k),F=e(7795),O=e.n(F),P=e(90569),N=e.n(P),T=e(3565),j=e.n(T),S=e(19216),I=e.n(S),Z=e(44589),B=e.n(Z),M=e(35032),D={};D.styleTagTransform=B(),D.setAttributes=j(),D.insert=N().bind(null,"head"),D.domAPI=O(),D.insertStyleElement=I();x()(M.Z,D);M.Z&&M.Z.locals&&M.Z.locals;const E=(0,l.Z)(w,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.showAlbumCreationForm?e("AlbumForm",{attrs:{"display-back-button":!0,title:n.t("photos","New album")},on:{back:function(t){n.showAlbumCreationForm=!1},done:n.albumCreatedHandler}}):e("div",{staticClass:"album-picker"},[e("h2",[n._v("\n\t\t"+n._s(n.t("photos","Add to Album"))+"\n\t\t"),n.loadingAlbums?e("NcLoadingIcon",{staticClass:"loading-icon"}):n._e()],1),n._v(" "),e("ul",{staticClass:"albums-container"},n._l(n.albums,(function(t){return e("NcListItem",{key:t.basename,staticClass:"album",attrs:{title:t.basename,"aria-label":n.t("photos","Add selection to album {ablumName}",{albumName:t.basename})},on:{click:function(e){return n.pickAlbum(t.basename)}}},[e("template",{slot:"icon"},[-1!==t.lastPhoto?e("img",{staticClass:"album__image",attrs:{src:n._f("toCoverUrl")(t.lastPhoto)}}):e("div",{staticClass:"album__image album__image--placeholder"},[e("ImageMultiple",{attrs:{size:32}})],1)]),n._v(" "),e("template",{slot:"subtitle"},[n._v("\n\t\t\t\t"+n._s(n.n("photos","%n item","%n photos and videos",t.nbItems))+"\n\t\t\t\t")])],2)})),1),n._v(" "),e("NcButton",{staticClass:"new-album-button",attrs:{"aria-label":n.t("photos","Create a new album."),type:"tertiary"},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[n._v("\n\t\t"+n._s(n.t("photos","Create new album"))+"\n\t")])],1)}),[],!1,null,"c27aa5aa",null).exports;var H=e(60627),V=e(79906),W=e(27248);function L(n,t,e,i,o,r,a){try{var l=n[r](a),s=l.value}catch(n){return void e(n)}l.done?t(s):Promise.resolve(s).then(i,o)}function Y(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var r=n.apply(t,e);function a(n){L(r,i,o,a,l,"next",n)}function l(n){L(r,i,o,a,l,"throw",n)}a(void 0)}))}}function R(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function $(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?R(Object(e),!0).forEach((function(t){z(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function z(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const U={name:"Timeline",components:{Delete:r.Z,PlusBoxMultiple:s,Download:c.Z,Plus:o.Z,NcEmptyContent:u.NcEmptyContent,NcModal:u.NcModal,NcActions:u.NcActions,NcActionButton:u.NcActionButton,NcButton:u.NcButton,AlbumForm:v.Z,AlbumPicker:E,FilesListViewer:g.Z,File:h.Z,ActionFavorite:H.Z,ActionDownload:V.Z,HeaderNavigation:W.Z},filters:{dateMonth:function(n){return p()(n,"YYYYMM").format("MMMM")},dateYear:function(n){return p()(n,"YYYYMM").format("YYYY")}},mixins:[f.Z,b.Z,A.Z,u.isMobile],beforeRouteLeave:function(n,t,e){window.scrollTo(0,0),e()},props:{onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return d.Oj}},onThisDay:{type:Boolean,default:!1},rootTitle:{type:String,required:!0}},data:function(){return{loadingCount:0,showAlbumCreationForm:!1,showAlbumPicker:!1,appContent:document.getElementById("app-content-vue")}},computed:$({},(0,i.Se)(["files"])),methods:$($({},(0,i.nv)(["deleteFiles","addFilesToAlbum"])),{},{getContent:function(){this.fetchFiles("",{mimesType:this.mimesType,onThisDay:this.onThisDay,onlyFavorites:this.onlyFavorites})},openViewer:function(n){var t=this,e=this.files[n];OCA.Viewer.open({fileInfo:e,list:Object.values(this.fileIdsByMonth).flat().map((function(n){return t.files[n]})),loadMore:e.loadMore?Y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadMore(!0);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))):function(){return[]},canLoop:e.canLoop})},openUploader:function(){},addSelectionToAlbum:function(n){var t=this;return Y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showAlbumPicker=!1,e.next=3,t.addFilesToAlbum({albumName:n,fileIdsToAdd:t.selectedFileIds});case 3:case"end":return e.stop()}}),e)})))()},deleteSelection:function(){var n=this;return Y(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.selectedFileIds,n.onUncheckFiles(e),n.fetchedFileIds=n.fetchedFileIds.filter((function(n){return!e.includes(n)})),t.next=5,n.deleteFiles(e);case 5:case"end":return t.stop()}}),t)})))()}})};var q=e(73934),G={};G.styleTagTransform=B(),G.setAttributes=j(),G.insert=N().bind(null,"head"),G.domAPI=O(),G.insertStyleElement=I();x()(q.Z,G);q.Z&&q.Z.locals&&q.Z.locals;const J=(0,l.Z)(U,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.errorFetchingFiles?e("NcEmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"timeline"},[e("HeaderNavigation",{key:"navigation",attrs:{loading:n.loadingCount>0,path:"/",title:n.rootTitle,"root-title":n.rootTitle},on:{refresh:n.resetFetchFilesState}},[e("div",{staticClass:"timeline__header__left"},[0===n.selectedFileIds.length?e("NcActions",{attrs:{"force-title":!0,"force-menu":!0,"menu-title":n.t("photos","Add")}},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Create a new album")},on:{click:function(t){n.showAlbumCreationForm=!0}}},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Create new album"))+"\n\t\t\t\t\t"),e("PlusBoxMultiple",{attrs:{slot:"icon"},slot:"icon"})],1)],1):[e("NcButton",{attrs:{"close-after-click":!0,type:"primary","aria-label":n.t("photos","Add selection to an album")},on:{click:function(t){n.showAlbumPicker=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus",{attrs:{slot:"icon"},slot:"icon"})]},proxy:!0}])},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Add to album"))+"\n\t\t\t\t")]),n._v(" "),e("NcActions",{attrs:{"aria-label":n.t("photos","Open actions menu")}},[e("ActionDownload",{attrs:{"selected-file-ids":n.selectedFileIds,title:n.t("photos","Download selected files")}},[e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),e("ActionFavorite",{attrs:{"selected-file-ids":n.selectedFileIds}}),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Delete selection")},on:{click:n.deleteSelection}},[n._v("\n\t\t\t\t\t\t"+n._s(n.t("photos","Delete selection"))+"\n\t\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]],2)]),n._v(" "),e("FilesListViewer",{ref:"filesListViewer",staticClass:"timeline__file-list",attrs:{"container-element":n.appContent,"file-ids-by-section":n.fileIdsByMonth,sections:n.monthsList,loading:n.loadingFiles,"base-height":n.isMobile?120:200,"empty-message":n.t("photos","No photos in here")},on:{"need-content":n.getContent},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.file,o=t.visibility;return[i.sectionHeader?e("h3",{staticClass:"section-header",attrs:{id:"file-picker-section-header-"+i.id}},[e("b",[n._v(n._s(n._f("dateMonth")(i.id)))]),n._v("\n\t\t\t\t"+n._s(n._f("dateYear")(i.id))+"\n\t\t\t")]):e("File",{attrs:{file:n.files[i.id],"allow-selection":!0,selected:!0===n.selection[i.id],visibility:o,semaphore:n.semaphore},on:{click:n.openViewer,"select-toggled":n.onFileSelectToggle}})]}}])}),n._v(" "),n.showAlbumCreationForm?e("NcModal",{key:"albumCreationForm",attrs:{"close-button-contained":!1,title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:function(t){n.showAlbumCreationForm=!1}}})],1):n._e(),n._v(" "),n.showAlbumPicker?e("NcModal",{key:"albumPicker",attrs:{"close-button-contained":!1,title:n.t("photos","Add to album")},on:{close:function(t){n.showAlbumPicker=!1}}},[e("AlbumPicker",{on:{"album-picked":n.addSelectionToAlbum}})],1):n._e()],1)}),[],!1,null,"302f95b0",null).exports}}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=24a54ec1d75a900a8f93