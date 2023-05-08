(()=>{"use strict";var e={8059:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(9526),o=r(4942),a=r(885),i=r(5861),l=r(4333),u=r(1133),s=r(410),f=r(9233),c=r(3497),d=r(1451),p=r(2940),b=r(7779),h=r(4018),y=r(7132),g=(r(8859),r(2361)),m=r(810),j=r(7557);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={username:"",email:"",password:""},w=function(){var e=(0,i.default)((function*(){yield g.loadAsync({"AmaticSC-Regular":r(150)})}));return function(){return e.apply(this,arguments)}}();function S(){console.log(y.default.OS);var e=(0,n.useState)(x),t=(0,a.default)(e,2),o=t[0],i=t[1],l=(0,n.useState)(!1),g=(0,a.default)(l,2),v=g[0],S=g[1],P=(0,n.useState)(!1),F=(0,a.default)(P,2),T=F[0],E=F[1],k=function(){S(!1),b.default.dismiss()};return T?(0,j.jsx)(p.default,{onPress:k,children:(0,j.jsx)(u.default,{style:C.container,children:(0,j.jsx)(s.default,{style:C.image,source:r(4940),children:(0,j.jsx)(h.default,{behavior:"ios"==y.default.OS?"padding":"height",children:(0,j.jsxs)(u.default,{style:O(O({},C.form),{},{marginBottom:v?20:0}),children:[(0,j.jsx)(u.default,{style:C.formHeader,children:(0,j.jsx)(f.default,{style:C.formTitle,children:"Registration"})}),(0,j.jsxs)(u.default,{children:[(0,j.jsx)(f.default,{style:C.inputTitle,children:"Enter your name"}),(0,j.jsx)(c.default,{placeholder:"Username",style:C.input,onFocus:function(){return S(!0)},value:o.username,onChangeText:function(e){return i((function(t){return O(O({},t),{},{username:e})}))}})]}),(0,j.jsxs)(u.default,{children:[(0,j.jsx)(f.default,{style:C.inputTitle,children:"Enter your email"}),(0,j.jsx)(c.default,{placeholder:"Email",style:C.input,onFocus:function(){return S(!0)},value:o.email,onChangeText:function(e){return i((function(t){return O(O({},t),{},{email:e})}))}})]}),(0,j.jsxs)(u.default,{children:[(0,j.jsx)(f.default,{style:C.inputTitle,children:"Enter password"}),(0,j.jsx)(c.default,{placeholder:"Password",style:C.input,secureTextEntry:!0,onFocus:function(){return S(!0)},value:o.password,onChangeText:function(e){return i((function(t){return O(O({},t),{},{password:e})}))}})]}),(0,j.jsx)(d.default,{activeOpacity:.8,style:C.btn,onPress:k,children:(0,j.jsx)(f.default,{style:C.btnTitle,children:"Sign Up"})})]})})})})}):(0,j.jsx)(m.default,{startAsync:w,onFinish:function(){return E(!0)},onError:console.warn})}var C=l.default.create({container:{flex:1},image:{flex:1,resizeMode:"cover",justifyContent:"flex-end"},form:{padding:20,borderRadius:25,backgroundColor:"#ffffff"},formHeader:{alignItems:"center"},formTitle:{fontFamily:"AmaticSC-Regular",fontSize:30,color:"#000000"},inputTitle:{marginBottom:4,fontFamily:"AmaticSC-Regular",color:"#a2a2a2"},input:{height:50,marginBottom:12,borderWidth:1,borderRadius:8,color:"#171717",borderColor:"#E8E8E8",backgroundColor:"#F6F6F6"},btn:O({justifyContent:"center",alignItems:"center",height:50,marginTop:26,borderWidth:1,borderRadius:100,borderColor:"transparent",backgroundColor:"#FF6C00"},y.default.select({ios:{},android:{}})),btnTitle:{fontFamily:"AmaticSC-Regular",fontSize:24,fontWeight:400,color:"#F6F6F6"}});function P(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(S,{})})}},150:(e,t,r)=>{e.exports=r.p+"static/media/AmaticSC-Regular.fcbad0887ed49b623c0f.ttf"},4940:(e,t,r)=>{e.exports=r.p+"static/media/background.28b7467b5ef5b52d5ebd.jpg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(f=0;f<e.length;f++){for(var[n,o,a]=e[f],l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/hw-react-native/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,u]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var f=u(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(f)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[315],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.937d2b7f.js.map