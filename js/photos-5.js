(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{357:function(n,t,e){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var i=e(426),s=i.prepareRequestOptions;i.prepareRequestOptions=function(n,t){t.cancelToken&&"object"===r(t.cancelToken)&&(n.cancelToken=t.cancelToken),s(n,t),t.method&&"string"==typeof t.method&&(n.method=t.method)},n.exports=i},382:function(n,t,e){"use strict";var r=e(425),i=e.n(r),s=e(68),a=e.n(s),o=e(416),c=e.n(o),d=e(10);i.a.getPatcher().patch("request",a.a);var p=Object(d.generateRemoteUrl)("dav"),u=i.a.createClient(p);c()(p).pathname;t.a=u},418:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var r="\n\t<oc:fileid />\n\t<d:getlastmodified />\n\t<d:getetag />\n\t<d:getcontenttype />\n\t<d:getcontentlength />\n\t<nc:has-preview />\n\t<oc:favorite />\n\t<d:resourcetype />";'<?xml version="1.0"?>\n\t\t\t<d:propfind xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:prop>\n\t\t\t\t\t'.concat(r,"\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>")},442:function(n,t){},443:function(n,t){},452:function(n,t){},453:function(n,t){},473:function(n,t){},475:function(n,t){},476:function(n,t){},479:function(n,t){},480:function(n,t){},485:function(n,t){},486:function(n,t){},493:function(n,t){},496:function(n,t){},502:function(n,t){},505:function(n,t){},791:function(n,t,e){var r={"./af":510,"./af.js":510,"./ar":511,"./ar-dz":512,"./ar-dz.js":512,"./ar-kw":513,"./ar-kw.js":513,"./ar-ly":514,"./ar-ly.js":514,"./ar-ma":515,"./ar-ma.js":515,"./ar-sa":516,"./ar-sa.js":516,"./ar-tn":517,"./ar-tn.js":517,"./ar.js":511,"./az":518,"./az.js":518,"./be":519,"./be.js":519,"./bg":520,"./bg.js":520,"./bm":521,"./bm.js":521,"./bn":522,"./bn-bd":523,"./bn-bd.js":523,"./bn.js":522,"./bo":524,"./bo.js":524,"./br":525,"./br.js":525,"./bs":526,"./bs.js":526,"./ca":527,"./ca.js":527,"./cs":528,"./cs.js":528,"./cv":529,"./cv.js":529,"./cy":530,"./cy.js":530,"./da":531,"./da.js":531,"./de":532,"./de-at":533,"./de-at.js":533,"./de-ch":534,"./de-ch.js":534,"./de.js":532,"./dv":535,"./dv.js":535,"./el":536,"./el.js":536,"./en-au":537,"./en-au.js":537,"./en-ca":538,"./en-ca.js":538,"./en-gb":539,"./en-gb.js":539,"./en-ie":540,"./en-ie.js":540,"./en-il":541,"./en-il.js":541,"./en-in":542,"./en-in.js":542,"./en-nz":543,"./en-nz.js":543,"./en-sg":544,"./en-sg.js":544,"./eo":545,"./eo.js":545,"./es":546,"./es-do":547,"./es-do.js":547,"./es-mx":548,"./es-mx.js":548,"./es-us":549,"./es-us.js":549,"./es.js":546,"./et":550,"./et.js":550,"./eu":551,"./eu.js":551,"./fa":552,"./fa.js":552,"./fi":553,"./fi.js":553,"./fil":554,"./fil.js":554,"./fo":555,"./fo.js":555,"./fr":556,"./fr-ca":557,"./fr-ca.js":557,"./fr-ch":558,"./fr-ch.js":558,"./fr.js":556,"./fy":559,"./fy.js":559,"./ga":560,"./ga.js":560,"./gd":561,"./gd.js":561,"./gl":562,"./gl.js":562,"./gom-deva":563,"./gom-deva.js":563,"./gom-latn":564,"./gom-latn.js":564,"./gu":565,"./gu.js":565,"./he":566,"./he.js":566,"./hi":567,"./hi.js":567,"./hr":568,"./hr.js":568,"./hu":569,"./hu.js":569,"./hy-am":570,"./hy-am.js":570,"./id":571,"./id.js":571,"./is":572,"./is.js":572,"./it":573,"./it-ch":574,"./it-ch.js":574,"./it.js":573,"./ja":575,"./ja.js":575,"./jv":576,"./jv.js":576,"./ka":577,"./ka.js":577,"./kk":578,"./kk.js":578,"./km":579,"./km.js":579,"./kn":580,"./kn.js":580,"./ko":581,"./ko.js":581,"./ku":582,"./ku.js":582,"./ky":583,"./ky.js":583,"./lb":584,"./lb.js":584,"./lo":585,"./lo.js":585,"./lt":586,"./lt.js":586,"./lv":587,"./lv.js":587,"./me":588,"./me.js":588,"./mi":589,"./mi.js":589,"./mk":590,"./mk.js":590,"./ml":591,"./ml.js":591,"./mn":592,"./mn.js":592,"./mr":593,"./mr.js":593,"./ms":594,"./ms-my":595,"./ms-my.js":595,"./ms.js":594,"./mt":596,"./mt.js":596,"./my":597,"./my.js":597,"./nb":598,"./nb.js":598,"./ne":599,"./ne.js":599,"./nl":600,"./nl-be":601,"./nl-be.js":601,"./nl.js":600,"./nn":602,"./nn.js":602,"./oc-lnc":603,"./oc-lnc.js":603,"./pa-in":604,"./pa-in.js":604,"./pl":605,"./pl.js":605,"./pt":606,"./pt-br":607,"./pt-br.js":607,"./pt.js":606,"./ro":608,"./ro.js":608,"./ru":609,"./ru.js":609,"./sd":610,"./sd.js":610,"./se":611,"./se.js":611,"./si":612,"./si.js":612,"./sk":613,"./sk.js":613,"./sl":614,"./sl.js":614,"./sq":615,"./sq.js":615,"./sr":616,"./sr-cyrl":617,"./sr-cyrl.js":617,"./sr.js":616,"./ss":618,"./ss.js":618,"./sv":619,"./sv.js":619,"./sw":620,"./sw.js":620,"./ta":621,"./ta.js":621,"./te":622,"./te.js":622,"./tet":623,"./tet.js":623,"./tg":624,"./tg.js":624,"./th":625,"./th.js":625,"./tk":626,"./tk.js":626,"./tl-ph":627,"./tl-ph.js":627,"./tlh":628,"./tlh.js":628,"./tr":629,"./tr.js":629,"./tzl":630,"./tzl.js":630,"./tzm":631,"./tzm-latn":632,"./tzm-latn.js":632,"./tzm.js":631,"./ug-cn":633,"./ug-cn.js":633,"./uk":634,"./uk.js":634,"./ur":635,"./ur.js":635,"./uz":636,"./uz-latn":637,"./uz-latn.js":637,"./uz.js":636,"./vi":638,"./vi.js":638,"./x-pseudo":639,"./x-pseudo.js":639,"./yo":640,"./yo.js":640,"./zh-cn":641,"./zh-cn.js":641,"./zh-hk":642,"./zh-hk.js":642,"./zh-mo":643,"./zh-mo.js":643,"./zh-tw":644,"./zh-tw.js":644};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=791},792:function(n,t,e){"use strict";var r=e(107),i=e.n(r)()(!0);i.push([n.i,".grid-title[data-v-3f8ebca0]{grid-column:1/8;padding:48px 0 12px 0;margin:0}.grid-title span[data-v-3f8ebca0]{font-weight:normal}.grid-title.first-title[data-v-3f8ebca0]{padding:0 0 12px 0}\n","",{version:3,sources:["webpack://src/components/SeparatorVirtualGrid.vue"],names:[],mappings:"AA6CA,6BACC,eAAgB,CAChB,qBAAsB,CACtB,QAAS,CAHV,kCAKE,kBAAmB,CALrB,yCAQE,kBAAmB",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.grid-title {\n\tgrid-column: 1/8;\n\tpadding: 48px 0 12px 0;\n\tmargin: 0;\n\tspan {\n\t\tfont-weight: normal;\n\t}\n\t&.first-title {\n\t\tpadding: 0 0 12px 0;\n\t}\n}\n"],sourceRoot:""}]),t.a=i},793:function(n,t,e){"use strict";var r=e(107),i=e.n(r)()(!0);i.push([n.i,".loader{display:grid;height:60px}\n","",{version:3,sources:["webpack://src/components/Loader.vue"],names:[],mappings:"AAqCA,QACC,YAAa,CACb,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tdisplay: grid;\n\theight: 60px;\n}\n"],sourceRoot:""}]),t.a=i},794:function(n,t,e){"use strict";var r=e(107),i=e.n(r)()(!0);i.push([n.i,"@media (min-width: 0px) and (max-width: 400px){.grid-container[data-v-56a58566]{padding:0px 8px 256px 8px}}@media (min-width: 400px) and (max-width: 700px){.grid-container[data-v-56a58566]{padding:0px 8px 256px 8px}}@media (min-width: 700px) and (max-width: 1024px){.grid-container[data-v-56a58566]{padding:0px 44px 256px 44px}}@media (min-width: 1024px) and (max-width: 1280px){.grid-container[data-v-56a58566]{padding:0px 44px 256px 44px}}@media (min-width: 1280px) and (max-width: 1440px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 1440px) and (max-width: 1600px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 1600px) and (max-width: 2048px){.grid-container[data-v-56a58566]{padding:0px 66px 256px 66px}}@media (min-width: 2048px) and (max-width: 2560px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}@media (min-width: 2560px) and (max-width: 3440px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}@media (min-width: 3440px){.grid-container[data-v-56a58566]{padding:0px 88px 256px 88px}}\n","",{version:3,sources:["webpack://src/views/Timeline.vue"],names:[],mappings:"AAkTC,+CACC,iCACC,yBAAkD,CAClD,CAHF,iDACC,iCACC,yBAAkD,CAClD,CAHF,kDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,mDACC,iCACC,2BAAkD,CAClD,CAHF,2BACC,iCACC,2BAAkD,CAClD",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$previous: 0;\n@each $size, $config in get('sizes') {\n\t$marginTop: map-get($config, 'marginTop');\n\t$marginW: map-get($config, 'marginW');\n\t// if this is the last entry, only use min-width\n\t$rule: '(min-width: #{$previous}px) and (max-width: #{$size}px)';\n\t@if $size == 'max' {\n\t\t$rule: '(min-width: #{$previous}px)';\n\t}\n\t@media #{$rule} {\n\t\t.grid-container {\n\t\t\tpadding: 0px #{$marginW}px 256px #{$marginW}px;\n\t\t}\n\t}\n\t$previous: $size;\n}\n"],sourceRoot:""}]),t.a=i},798:function(n,t,e){"use strict";e.r(t);var r=e(353),i=e(69),s=e(36),a=e(21),o=e(108),c=e(382),d=e(418),p=e(424);function u(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){u(s,r,i,a,o,"next",n)}function o(n){u(s,r,i,a,o,"throw",n)}a(void 0)}))}}
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var m=function(){return h.apply(this,arguments)};function h(){return(h=l(regeneratorRuntime.mark((function n(){var t,e,r,i,u,l,m=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=m.length>0&&void 0!==m[0]&&m[0],e=m.length>1&&void 0!==m[1]?m[1]:{},e=Object.assign({},{page:0,perPage:10*p.sizes.max.count,mimesType:o.a},e),r="/files/".concat(Object(a.getCurrentUser)().uid),i=e.mimesType.reduce((function(n,t){return"".concat(n,"\n\t\t<d:eq>\n\t\t\t<d:prop>\n\t\t\t\t<d:getcontenttype/>\n\t\t\t</d:prop>\n\t\t\t<d:literal>").concat(t,"</d:literal>\n\t\t</d:eq>\n\t")}),""),u=t?"<d:eq>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:favorite/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:literal>1</d:literal>\n\t\t\t</d:eq>":"",e=Object.assign({method:"SEARCH",headers:{"content-Type":"text/xml"},data:'<?xml version="1.0" encoding="UTF-8"?>\n\t\t\t<d:searchrequest xmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<d:basicsearch>\n\t\t\t\t\t<d:select>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t'.concat(d.a,"\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:select>\n\t\t\t\t\t<d:from>\n\t\t\t\t\t\t<d:scope>\n\t\t\t\t\t\t\t<d:href>").concat(r,"</d:href>\n\t\t\t\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t\t\t\t</d:scope>\n\t\t\t\t\t</d:from>\n\t\t\t\t\t<d:where>\n\t\t\t\t\t\t<d:and>\n\t\t\t\t\t\t\t<d:or>\n\t\t\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t\t\t</d:or>\n\t\t\t\t\t\t\t").concat(u,"\n\t\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t\t<oc:owner-id/>\n\t\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t\t<d:literal>").concat(Object(a.getCurrentUser)().uid,"</d:literal>\n\t\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t\t</d:and>\n\t\t\t\t\t</d:where>\n\t\t\t\t\t<d:orderby>\n\t\t\t\t\t\t<d:order>\n\t\t\t\t\t\t\t<d:prop><d:getlastmodified/></d:prop>\n\t\t\t\t\t\t\t<d:descending/>\n\t\t\t\t\t\t</d:order>\n\t\t\t\t\t</d:orderby>\n\t\t\t\t\t<d:limit>\n\t\t\t\t\t\t<d:nresults>").concat(e.perPage,"</d:nresults>\n\t\t\t\t\t\t<ns:firstresult>").concat(e.page*e.perPage,"</ns:firstresult>\n\t\t\t\t\t</d:limit>\n\t\t\t\t</d:basicsearch>\n\t\t\t</d:searchrequest>"),deep:!0,details:!0},e),n.next=9,c.a.getDirectoryContents("",e);case 9:return l=n.sent,n.abrupt("return",l.data.map((function(n){return Object(s.b)(n)})).map((function(n){return Object.assign({},n,{filename:n.filename.replace(r,"")})})));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g=e(419),f=e(420),j={name:"SeparatorVirtualGrid",inheritAttrs:!1,props:{item:{type:Object,required:!0}}},C=e(106),v=e.n(C),x=e(792),A={insert:"head",singleton:!1},b=(v()(x.a,A),x.a.locals,e(45)),y=Object(b.a)(j,(function(){var n=this.$createElement,t=this._self._c||n;return t("h2",{staticClass:"grid-title",style:{height:this.item.height+"px"}},[this._v("\n\t"+this._s(this.item.injected.month)+"\n\t"),t("span",[this._v(this._s(this.item.injected.year))])])}),[],!1,null,"3f8ebca0",null).exports,w=e(391),k=e.n(w),D=e(421),O={name:"Loader"},z=e(793),$={insert:"head",singleton:!1},q=(v()(z.a,$),z.a.locals,Object(b.a)(O,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"loader"},[this._t("icon",[t("span",{staticClass:"icon-loading"})])],2)}),[],!1,null,null,null).exports),B=e(376),S=e(423);function T(n,t,e,r,i,s,a){try{var o=n[s](a),c=o.value}catch(n){return void e(n)}o.done?t(c):Promise.resolve(c).then(r,i)}function _(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var s=n.apply(t,e);function a(n){T(s,r,i,a,o,"next",n)}function o(n){T(s,r,i,a,o,"throw",n)}a(void 0)}))}}function R(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function P(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?R(Object(e),!0).forEach((function(t){F(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function F(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var E={name:"Timeline",components:{EmptyContent:g.a,VirtualGrid:k.a,Navigation:D.a},mixins:[S.a],props:{loading:{type:Boolean,required:!0},onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return o.a}},rootTitle:{type:String,required:!0},path:{type:String,default:""}},data:function(){return{cancelRequest:null,done:!1,error:null,page:0,lastSection:"",loaderComponent:q}},computed:P(P({},Object(i.c)(["files","timeline"])),{},{fileList:function(){var n=this;return this.timeline.map((function(t){return n.files[t]}))},contentList:function(){var n=this;return this.fileList.flatMap((function(t,e){var r=[],i=n.getFormatedDate(t.lastmod,"YYYY MMMM");return n.lastSection!==i&&(r.push({id:"title-".concat(e),injected:{year:n.getFormatedDate(t.lastmod,"YYYY"),month:n.getFormatedDate(t.lastmod,"MMMM")},height:90,columnSpan:0,newRow:!0,renderComponent:y}),n.lastSection=i),r.push({id:"img-".concat(t.fileid),injected:P(P({},t),{},{list:n.fileList,loadMore:n.getContent,canLoop:!1}),width:256,height:256,columnSpan:1,renderComponent:f.a}),r}))},isEmpty:function(){return 0===this.fileList.length}}),watch:{onlyFavorites:function(){var n=this;return _(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()},mimesType:function(){var n=this;return _(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.resetState(),n.getContent();case 2:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){this.getContent()},beforeDestroy:function(){this.cancelRequest&&this.cancelRequest("Changed view"),this.resetState()},methods:{getContent:function(n){var t=this;return _(regeneratorRuntime.mark((function e(){var r,i,s,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.done){e.next=2;break}return e.abrupt("return",Promise.resolve(!0));case 2:return t.cancelRequest&&t.cancelRequest("Changed view"),0===t.timeline.length&&t.$emit("update:loading",!0),r=Object(B.a)(m),i=r.request,s=r.cancel,t.cancelRequest=s,a=5*t.gridConfig.count,e.prev=7,e.next=10,i(t.onlyFavorites,{page:t.page,perPage:a,mimesType:t.mimesType});case 10:if((o=e.sent).length!==a&&(t.done=!0),t.$store.dispatch("updateTimeline",o),t.$store.dispatch("appendFiles",o),t.page+=1,!n){e.next=17;break}return e.abrupt("return",Promise.resolve(o));case 17:return e.abrupt("return",Promise.resolve(!1));case 20:return e.prev=20,e.t0=e.catch(7),e.t0.response&&e.t0.response.status&&(404===e.t0.response.status?(t.error=404,setTimeout((function(){t.$router.push({name:t.$route.name})}),3e3)):t.error=e.t0),console.error("Error fetching timeline",e.t0),e.abrupt("return",Promise.resolve(!0));case 25:return e.prev=25,t.$emit("update:loading",!1),t.cancelRequest=null,e.finish(25);case 29:case"end":return e.stop()}}),e,null,[[7,20,25,29]])})))()},resetState:function(){this.$store.dispatch("resetTimeline"),this.done=!1,this.error=null,this.page=0,this.lastSection="",this.$emit("update:loading",!0),this.$refs.virtualgrid.resetGrid()},getFormatedDate:function(n,t){return r(n).format(t)}}},M=e(794),H={insert:"head",singleton:!1},L=(v()(M.a,H),M.a.locals,Object(b.a)(E,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return 404===n.error?e("EmptyContent",{attrs:{"illustration-name":"folder"}},[n._v("\n\t"+n._s(n.t("photos","This folder does not exists"))+"\n")]):n.error?e("EmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):n.loading?n._e():e("div",[n.isEmpty?e("Navigation",{key:"navigation",attrs:{basename:n.path,filename:"/","root-title":n.rootTitle}}):n._e(),n._v(" "),n.isEmpty?e("EmptyContent",{attrs:{"illustration-name":"empty"}},[n._v("\n\t\t"+n._s(n.t("photos","No photos in here"))+"\n\t")]):n._e(),n._v(" "),e("div",{staticClass:"grid-container"},[e("VirtualGrid",{ref:"virtualgrid",attrs:{items:n.contentList,"update-function":n.getContent,"get-column-count":function(){return n.gridConfig.count},"get-grid-gap":function(){return n.gridConfig.gap},"update-trigger-margin":700,loader:n.loaderComponent}})],1)],1)}),[],!1,null,"56a58566",null));t.default=L.exports}}]);
//# sourceMappingURL=photos-5.js.map?v=2831643854746fca6d14