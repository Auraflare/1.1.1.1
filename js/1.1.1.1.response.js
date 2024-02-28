class e{constructor(){this.name="Lodash",this.version="1.0.0",console.log(`\n${this.name} v${this.version}\n`)}get(e={},t="",n=void 0){Array.isArray(t)||(t=this.toPath(t));const s=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===s?n:s}set(e={},t="",n){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,n,s)=>Object(e[n])===e[n]?e[n]:e[n]=/^\d+$/.test(t[s+1])?[]:{}),e)[t[t.length-1]]=n,e}toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var s={exports:{}};var r,o,i={exports:{}};function a(){return r||(r=1,i.exports=(e=e||function(e,n){var s;if("undefined"!=typeof window&&window.crypto&&(s=window.crypto),"undefined"!=typeof self&&self.crypto&&(s=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(s=globalThis.crypto),!s&&"undefined"!=typeof window&&window.msCrypto&&(s=window.msCrypto),!s&&void 0!==t&&t.crypto&&(s=t.crypto),!s)try{s=require("crypto")}catch(e){}var r=function(){if(s){if("function"==typeof s.getRandomValues)try{return s.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof s.randomBytes)try{return s.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),i={},a=i.lib={},c=a.Base={extend:function(e){var t=o(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},l=a.WordArray=c.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=t!=n?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,s=this.sigBytes,r=e.sigBytes;if(this.clamp(),s%4)for(var o=0;o<r;o++){var i=n[o>>>2]>>>24-o%4*8&255;t[s+o>>>2]|=i<<24-(s+o)%4*8}else for(var a=0;a<r;a+=4)t[s+a>>>2]=n[a>>>2];return this.sigBytes+=r,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=c.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(r());return new l.init(t,e)}}),d=i.enc={},u=d.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,s=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;s.push((o>>>4).toString(16)),s.push((15&o).toString(16))}return s.join("")},parse:function(e){for(var t=e.length,n=[],s=0;s<t;s+=2)n[s>>>3]|=parseInt(e.substr(s,2),16)<<24-s%8*4;return new l.init(n,t/2)}},h=d.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,s=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;s.push(String.fromCharCode(o))}return s.join("")},parse:function(e){for(var t=e.length,n=[],s=0;s<t;s++)n[s>>>2]|=(255&e.charCodeAt(s))<<24-s%4*8;return new l.init(n,t)}},p=d.Utf8={stringify:function(e){try{return decodeURIComponent(escape(h.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return h.parse(unescape(encodeURIComponent(e)))}},f=a.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,s=this._data,r=s.words,o=s.sigBytes,i=this.blockSize,a=o/(4*i),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*i,d=e.min(4*c,o);if(c){for(var u=0;u<c;u+=i)this._doProcessBlock(r,u);n=r.splice(0,c),s.sigBytes-=d}return new l.init(n,d)},clone:function(){var e=c.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});a.Hasher=f.extend({cfg:c.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new g.HMAC.init(e,n).finalize(t)}}});var g=i.algo={};return i}(Math),e)),i.exports;var e}var c=n(s.exports=(o=a(),function(){var e=o,t=e.lib.WordArray;function n(e,n,s){for(var r=[],o=0,i=0;i<n;i++)if(i%4){var a=s[e.charCodeAt(i-1)]<<i%4*2|s[e.charCodeAt(i)]>>>6-i%4*2;r[o>>>2]|=a<<24-o%4*8,o++}return t.create(r,o)}e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,s=this._map;e.clamp();for(var r=[],o=0;o<n;o+=3)for(var i=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)r.push(s.charAt(i>>>6*(3-a)&63));var c=s.charAt(64);if(c)for(;r.length%4;)r.push(c);return r.join("")},parse:function(e){var t=e.length,s=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var o=0;o<s.length;o++)r[s.charCodeAt(o)]=o}var i=s.charAt(64);if(i){var a=e.indexOf(i);-1!==a&&(t=a)}return n(e,t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),o.enc.Base64)),l={Switch:!0},d={Settings:l},u={Switch:!0,Title:"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",Icon:"lock.icloud.fill",IconColor:"#f48220",BackgroundColor:"#f6821f",Language:"auto"},h={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},i18n:{"zh-Hans":{IPv4:"IPv4",IPv6:"IPv6",COLO:"托管中心",WARP_Level:"隐私保护",Account_Type:"账户类型",Data_Info:"流量信息",Unknown:"未知",Fail:"获取失败",WARP_Level_Off:"关闭",WARP_Level_On:"开启",WARP_Level_Plus:"增强",Account_Type_unlimited:"无限版",Account_Type_limited:"有限版",Account_Type_team:"团队版",Account_Type_plus:"WARP+",Account_Type_free:"免费版",Data_Info_Used:"已用",Data_Info_Residual:"剩余",Data_Info_Total:"总计",Data_Info_Unlimited:"无限"},"zh-Hant":{IPv4:"IPv4",IPv6:"IPv6",COLO:"託管中心",WARP_Level:"隱私保護",Account_Type:"賬戶類型",Data_Info:"流量信息",Unknown:"未知",Fail:"獲取失敗",WARP_Level_Off:"關閉",WARP_Level_On:"開啟",WARP_Level_Plus:"增強",Account_Type_unlimited:"無限版",Account_Type_limited:"有限版",Account_Type_team:"團隊版",Account_Type_plus:"WARP+",Account_Type_free:"免費版",Data_Info_Used:"已用",Data_Info_Residual:"剩餘",Data_Info_Total:"總計",Data_Info_Unlimited:"無限"},en:{IPv4:"IPv4",IPv6:"IPv6",COLO:"Colo Center",WARP_Level:"WARP Level",Account_Type:"Account Type",Data_Info:"Data Info.",Unknown:"Unknown",Fail:"Fail to Get",WARP_Level_Off:"OFF",WARP_Level_On:"ON",WARP_Level_Plus:"PLUS",Account_Type_unlimited:"Unlimited",Account_Type_limited:"Limited",Account_Type_team:"Team",Account_Type_plus:"WARP+",Account_Type_free:"Free",Data_Info_Used:"Used",Data_Info_Residual:"Remaining",Data_Info_Total:"Earned",Data_Info_Unlimited:"Unlimited"}}},p={Settings:u,Configs:h},f={Switch:!0,setupMode:"ChangeKeypair",Verify:{RegistrationId:null,Mode:"Token",Content:null}},g={Settings:f},y={Switch:!0,IPServer:"ipw.cn",Verify:{Mode:"Token",Content:""},zone:{id:"",name:"",dns_records:[{id:"",type:"A",name:"",content:"",ttl:1,proxied:!1}]}},m={Request:{url:"https://api.cloudflare.com/client/v4",headers:{"content-type":"application/json"}}},v={Settings:y,Configs:m},S={Switch:!0,setupMode:null,deviceType:"iOS",Verify:{License:null,Mode:"Token",Content:null,RegistrationId:null}},_={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},Environment:{iOS:{Type:"i",Version:"v0i2308151957",headers:{"user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},macOS:{Type:"m",Version:"v0i2109031904",headers:{"user-agent":"1.1.1.1/2109031904.1 CFNetwork/1327.0.4 Darwin/21.2.0","cf-client-version":"m-2021.12.1.0-0"}},Android:{Type:"a",Version:"v0a1922",headers:{"user-agent":"okhttp/3.12.1","cf-client-version":"a-6.3-1922"}},Windows:{Type:"w",Version:"",headers:{"user-agent":"","cf-client-version":""}},Linux:{Type:"l",Version:"",headers:{"user-agent":"","cf-client-version":""}}}},w={Settings:S,Configs:_},$={Switch:!0,PrivateKey:"",PublicKey:""},b={interface:{addresses:{v4:"",v6:""}},peers:[{public_key:"",endpoint:{host:"",v4:"",v6:""}}]},C={Settings:$,Configs:b},k=Database={Default:Object.freeze({__proto__:null,Settings:l,default:d}),Panel:Object.freeze({__proto__:null,Configs:h,Settings:u,default:p}),"1dot1dot1dot1":Object.freeze({__proto__:null,Settings:f,default:g}),DNS:Object.freeze({__proto__:null,Configs:m,Settings:y,default:v}),WARP:Object.freeze({__proto__:null,Configs:_,Settings:S,default:w}),VPN:Object.freeze({__proto__:null,Configs:b,Settings:$,default:C})};const P=new class{constructor(t,n){this.name=t,this.version="1.5.7",this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,n),this.log("","🚩 开始!",`ENV v${this.version}`,""),this.lodash=new e(this.name),this.log("",this.name,"")}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}toObj(e,t=null){try{return JSON.parse(e)}catch{return t}}toStr(e,t=null){try{return JSON.stringify(e)}catch{return t}}getjson(e,t){let n=t;if(this.getdata(e))try{n=JSON.parse(this.getdata(e))}catch{}return n}setjson(e,t){try{return this.setdata(JSON.stringify(e),t)}catch{return!1}}getScript(e){return new Promise((t=>{this.get({url:e},((e,n,s)=>t(s)))}))}runScript(e,t){return new Promise((n=>{let s=this.getdata("@chavy_boxjs_userCfgs.httpapi");s=s?s.replace(/\n/g,"").trim():s;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=t&&t.timeout?t.timeout:r;const[o,i]=s.split("@"),a={url:`http://${i}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"},timeout:r};this.post(a,((e,t,s)=>n(s)))})).catch((e=>this.logErr(e)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),n=this.fs.existsSync(e),s=!n&&this.fs.existsSync(t);if(!n&&!s)return{};{const s=n?e:t;try{return JSON.parse(this.fs.readFileSync(s))}catch(e){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),n=this.fs.existsSync(e),s=!n&&this.fs.existsSync(t),r=JSON.stringify(this.data);n?this.fs.writeFileSync(e,r):s?this.fs.writeFileSync(t,r):this.fs.writeFileSync(e,r)}}getdata(e){let t=this.getval(e);if(/^@/.test(e)){const[,n,s]=/^@(.*?)\.(.*?)$/.exec(e),r=n?this.getval(n):"";if(r)try{const e=JSON.parse(r);t=e?this.lodash.get(e,s,""):t}catch(e){t=""}}return t}setdata(e,t){let n=!1;if(/^@/.test(t)){const[,s,r]=/^@(.*?)\.(.*?)$/.exec(t),o=this.getval(s),i=s?"null"===o?null:o||"{}":"{}";try{const t=JSON.parse(i);this.lodash.set(t,r,e),n=this.setval(JSON.stringify(t),s)}catch(t){const o={};this.lodash.set(o,r,e),n=this.setval(JSON.stringify(o),s)}}else n=this.setval(e,t);return n}getval(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":return $persistentStore.read(e);case"Quantumult X":return $prefs.valueForKey(e);case"Node.js":return this.data=this.loaddata(),this.data[e];default:return this.data&&this.data[e]||null}}setval(e,t){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":return $persistentStore.write(e,t);case"Quantumult X":return $prefs.setValueForKey(e,t);case"Node.js":return this.data=this.loaddata(),this.data[t]=e,this.writedata(),!0;default:return this.data&&this.data[t]||null}}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(e={}||"",t={}){switch(e.constructor){case Object:e={...e,...t};break;case String:e={url:e,...t}}e.method||(e.method="GET",(e.body??e.bodyBytes)&&(e.method="POST")),delete e.headers?.["Content-Length"],delete e.headers?.["content-length"];const n=e.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return delete e.id,e.policy&&(this.isLoon()&&(e.node=e.policy),this.isStash()&&this.lodash.set(e,"headers.X-Stash-Selected-Proxy",encodeURI(e.policy))),ArrayBuffer.isView(e.body)&&(e["binary-mode"]=!0),await new Promise(((t,s)=>{$httpClient[n](e,((n,r,o)=>{n?s(n):(r.ok=/^2\d\d$/.test(r.status),r.statusCode=r.status,o&&(r.body=o,1==e["binary-mode"]&&(r.bodyBytes=o)),t(r))}))}));case"Quantumult X":switch(delete e.charset,delete e.path,delete e.scheme,delete e.sessionIndex,delete e.statusCode,e.policy&&this.lodash.set(e,"opts.policy",e.policy),(e?.headers?.["Content-Type"]??e?.headers?.["content-type"])?.split(";")?.[0]){default:delete e.bodyBytes;break;case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":delete e.body,ArrayBuffer.isView(e.bodyBytes)&&(e.bodyBytes=e.bodyBytes.buffer.slice(e.bodyBytes.byteOffset,e.bodyBytes.byteLength+e.bodyBytes.byteOffset));case void 0:}return await $task.fetch(e).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let t=require("iconv-lite");this.initGotEnv(e);const{url:s,...r}=e;return await this.got[n](s,r).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const n=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();n&&this.ckjar.setCookieSync(n,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=t.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const n=t?new Date(t):new Date;let s={"M+":n.getMonth()+1,"d+":n.getDate(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in s)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?s[t]:("00"+s[t]).substr((""+s[t]).length)));return e}msg(e=name,t="",n="",s){const r=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,n,r(s));break;case"Quantumult X":$notify(e,t,n,r(s));case"Node.js":}if(!this.isMuteLog){let s=["","==============📣系统通知📣=============="];s.push(e),t&&s.push(t),n&&s.push(n),console.log(s.join("\n")),this.logs=this.logs.concat(s)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(e={}){const t=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${t} 秒`,""),e.headers?.["Content-Encoding"]&&(e.headers["Content-Encoding"]="identity"),e.headers?.["content-encoding"]&&(e.headers["content-encoding"]="identity"),delete e.headers?.["Content-Length"],delete e.headers?.["content-length"],this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$done(e);break;case"Quantumult X":delete e.charset,delete e.path,delete e.scheme,delete e.sessionIndex,delete e.statusCode,e.body instanceof ArrayBuffer?(e.bodyBytes=e.body,delete e.body):ArrayBuffer.isView(e.body)?(e.bodyBytes=e.body.buffer.slice(e.body.byteOffset,e.body.byteLength+e.body.byteOffset),delete e.body):e.body&&delete e.bodyBytes,$done(e);break;case"Node.js":process.exit(1)}}getENV(e,t,n){let s=this.getjson(e,n),r={};if("undefined"!=typeof $argument&&Boolean($argument)){let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let t in e)this.lodash.set(r,t,e[t])}const o={Settings:n?.Default?.Settings||{},Configs:n?.Default?.Configs||{},Caches:{}};Array.isArray(t)||(t=[t]);for(let e of t)o.Settings={...o.Settings,...n?.[e]?.Settings,...r,...s?.[e]?.Settings},o.Configs={...o.Configs,...n?.[e]?.Configs},s?.[e]?.Caches&&"string"==typeof s?.[e]?.Caches&&(s[e].Caches=JSON.parse(s?.[e]?.Caches)),o.Caches={...o.Caches,...s?.[e]?.Caches};return this.traverseObject(o.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>this.string2number(e))):this.string2number(t)),t))),o}traverseObject(e,t){for(var n in e){var s=e[n];e[n]="object"==typeof s&&null!==s?this.traverseObject(s,t):t(n,s)}return e}string2number(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}("☁ Cloudflare: 1️⃣ 1.1.1.1 v3.0.1(1).response"),A=(new class{constructor(e=[]){this.name="URI v1.2.6",this.opts=e,this.json={scheme:"",host:"",path:"",query:{}}}parse(e){let t=e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(t?.path?t.paths=t.path.split("/"):t.path="",t?.paths){const e=t.paths[t.paths.length-1];if(e?.includes(".")){const n=e.split(".");t.format=n[n.length-1]}}return t?.query&&(t.query=Object.fromEntries(t.query.split("&").map((e=>e.split("="))))),t}stringify(e=this.json){let t="";return e?.scheme&&e?.host&&(t+=e.scheme+"://"+e.host),e?.path&&(t+=e?.host?"/"+e.path:e.path),e?.query&&(t+="?"+Object.entries(e.query).map((e=>e.join("="))).join("&")),t}}).parse($request.url);P.log(`⚠ URL: ${JSON.stringify(A)}`,"");const O=$request.method;A.host,A.path;const x=A.paths;P.log(`⚠ METHOD: ${O}`,"");const j=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];P.log(`⚠ FORMAT: ${j}`,""),(async()=>{const{Settings:e,Caches:t,Configs:n}=function(e,t,n,s){e.log("☑️ Set Environment Variables","");let{Settings:r,Caches:o,Configs:i}=e.getENV(t,n,s);switch(r.Verify?.Mode){case"Token":i.Request.headers.authorization=`Bearer ${r.Verify?.Content}`;break;case"ServiceKey":i.Request.headers["x-auth-user-service-key"]=r.Verify?.Content;break;case"Key":r.Verify.Content=Array.from(r.Verify?.Content.split("\n")),i.Request.headers["x-auth-key"]=r.Verify?.Content[0],i.Request.headers["x-auth-email"]=r.Verify?.Content[1];break;default:e.log("无可用授权方式",`Mode=${r.Verify?.Mode}`,`Content=${r.Verify?.Content}`);case void 0:}return r.zone?.dns_records&&(r.zone.dns_records=Array.from(r.zone.dns_records.split("\n")),r.zone.dns_records.forEach(((e,t)=>{r.zone.dns_records[t]=Object.fromEntries(e.split("&").map((e=>e.split("=")))),r.zone.dns_records[t].proxied=JSON.parse(r.zone.dns_records[t].proxied)}))),e.log("✅ Set Environment Variables","Settings: "+typeof r,`Settings内容: ${JSON.stringify(r)}`,""),{Settings:r,Caches:o,Configs:i}}(P,"Cloudflare","1dot1dot1dot1",k);switch(P.log(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:const t=P.getENV("WireGuard","VPN",k),n=($request?.headers?.Authorization??$request?.headers?.authorization)?.match(/Bearer (\S*)/)?.[1],s=`/${x[1]}/${x[2]}`==`/reg/${e.Verify.RegistrationId}`?"RegistrationId":"/reg"==`/${x[1]}`?"Registration":void 0;P.log(`🚧 KIND: ${s}`,"");let r={};switch(j){case void 0:case"application/x-www-form-urlencoded":case"text/plain":case"text/html":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(r=JSON.parse($response.body),Array.isArray(r.messages)&&r.messages.forEach((e=>P.msg(P.name,`code: ${e.code}`,`message: ${e.message}`))),r.success){case!0:const e=r?.result?.[0]??r?.result;if(e){e.config.reserved=await async function(e="AAAA"){P.log(`⚠ ${P.name}, Set Reserved`,"");let t=n(c.parse(e).toString(),2);return P.log(`🎉 ${P.name}, Set Reserved`,`reserved: ${t}`,""),t;function n(e,t){let n=[];for(var s=0,r=e.length;s<r/t;s++)n.push(parseInt("0x"+e.slice(t*s,t*(s+1)),16));return n}}(e?.config?.client_id),await async function(e,t,n){return P.log(`⚠ ${P.name}, Set Configs`,""),P.setjson(n?.interface?.addresses?.v4,`@${e}.${t}.Configs.interface.addresses.v4`),P.setjson(n?.interface?.addresses?.v6,`@${e}.${t}.Configs.interface.addresses.v6`),P.setjson(n?.reserved,`@${e}.${t}.Configs.Reserved`),P.setjson(n?.peers?.[0]?.public_key,`@${e}.${t}.Configs.peers[0].public_key`),P.setjson(n?.peers?.[0]?.endpoint?.host,`@${e}.${t}.Configs.peers[0].endpoint.host`),P.setjson(n?.peers?.[0]?.endpoint?.v4,`@${e}.${t}.Configs.peers[0].endpoint.v4`),P.setjson(n?.peers?.[0]?.endpoint?.v6,`@${e}.${t}.Configs.peers[0].endpoint.v6`),P.log(`🎉 ${P.name}, Set Configs`,"")}("WireGuard","VPN",e.config);const r=await async function(e,t){P.log(`⚠ ${P.name}, Set Message`,"");const n=`当前客户端公钥为:\n${e.key}\n用户设置公钥为:\n${t?.Settings?.PublicKey??"未设置，请到BoxJs面板中进行设置"}\n如两者一致，下列配置有效`;let s=`有效性验证:\n${n}\n\n\n⚠️注意留存本文件\n\n\n`;switch(P.platform()){case"Surge":s+=`Surge用配置:\n${`[Proxy]\nWARP = wireguard, section-name=Cloudflare, test-url=http://cp.cloudflare.com/generate_204\n\n[WireGuard Cloudflare]\nprivate-key = ${t?.Settings?.PrivateKey}\nself-ip = ${e?.config?.interface?.addresses?.v4}\nself-ip-v6 = ${e?.config?.interface?.addresses?.v6}\ndns-server = 1.1.1.1, 2606:4700:4700::1111\nmtu = 1280\npeer = (public-key = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=, allowed-ips = "0.0.0.0/0, ::/0", endpoint = engage.nanocat.cloud:2408, keepalive = 45, client-id = ${e?.config?.reserved?.[0]}/${e?.config?.reserved?.[1]}/${e?.config?.reserved?.[2]})`}`;break;case"Loon":s+=`Loon用配置:\n${`[Proxy]\nWARP = wireguard, interface-ip=${e?.config?.interface?.addresses?.v4}, interface-ipv6=${e?.config?.interface?.addresses?.v6}, private-key="${t?.Settings?.PrivateKey}", mtu=1280, dns=1.1.1.1, dnsv6=2606:4700:4700::1111, keepalive=45, peers=[{public-key="bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=", allowed-ips="0.0.0.0/0, ::/0", endpoint=engage.nanocat.cloud:2408, reserved=[${e?.config?.reserved}]}]`}`;break;case"Shadowrocket":s+=`Shadowrocket用配置:\n${`[Proxy]\nWARP = wireguard, section-name=Cloudflare, test-url=http://cp.cloudflare.com/generate_204\n\n[WireGuard Cloudflare]\nprivate-key = ${t?.Settings?.PrivateKey}\nself-ip = ${e?.config?.interface?.addresses?.v4}\nself-ip-v6 = ${e?.config?.interface?.addresses?.v6}\ndns-server = 1.1.1.1, 2606:4700:4700::1111\nmtu = 1280\npeer = (public-key = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=, allowed-ips = "0.0.0.0/0, ::/0", endpoint = engage.nanocat.cloud:2408, keepalive = 45, client-id = ${e?.config?.reserved?.[0]}/${e?.config?.reserved?.[1]}/${e?.config?.reserved?.[2]})`}\n\n\nShadowrocket点击一键添加:\nshadowrocket://add/${`wg://engage.nanocat.cloud:2408?publicKey=bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=&privateKey=${t?.Settings?.PrivateKey}&ip=${e?.config?.interface?.addresses?.v4}&dns=1.1.1.1&mtu=1280&keepalive=45&udp=1&reserved=${e?.config?.reserved?.[0]}/${e?.config?.reserved?.[1]}/${e?.config?.reserved?.[2]}#☁️%20Cloudflare%20for%20${e?.account?.account_type}`}`;break;case"Stash":s+=`Stash用配置:\n${`name: Cloudflare\ntype: wireguard\nserver: engage.nanocat.cloud # domain is supported\nport: 2408\nip: ${e?.config?.interface?.addresses?.v4}\nipv6: ${e?.config?.interface?.addresses?.v6} # optional\nprivate-key: ${t?.Settings?.PrivateKey}\npublic-key: bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo= # peer public key\n# preshared-key: # optional\ndns: [1.1.1.1, 2606:4700:4700::1111] # optional\nmtu: 1280 # optional\nreserved: [${e?.config?.reserved}] # optional\nkeepalive: 45 # optional\n# underlying-proxy: # optional\n#   type: trojan\n#   server: your-underlying-proxy\n#   port: 443\n#   password: your-password`}`;break;case"Node.js":break;case"Quantumult X":s+="Quantumult X不支持 Wireguard 协议，仅显示提取后完整配置"}const r=JSON.stringify(e);s+=`\n\n\n完整配置内容:\n${r}`;const o=encodeURIComponent(`☁️ Cloudflare for ${e?.account?.account_type}配置文件`),i=`mailto:engage@nanocat.me?subject=${o}&body=${encodeURIComponent(s)}`;return P.log(`🎉 ${P.name}, Set Message`,`message: ${i}`,""),i}(e,t);switch(s){case"Registration":"GET"!==$request.method&&"PUT"!==$request.method||(P.msg(P.name,`检测到${e?.account?.account_type}配置文件`,`点击此通知在“邮件”中打开，查看完整配置。\n设备注册ID:\n${e?.id}\n设备令牌Token:\n${n}\n客户端公钥:\n${e?.key}\n节点公钥:\n${e?.config?.peers?.[0]?.public_key}`,r),P.log(P.name,`检测到${e?.account?.account_type}配置文件`,`原始配置文件:\n注意！文本内容未转义！字符串中可能包含额外字符！\n${JSON.stringify(e)}`,""));break;case"RegistrationId":"PUT"===$request.method&&(P.msg(P.name,"重置密钥",`点击此通知在“邮件”中打开，查看完整配置。\n收到回复数据，当前客户端公钥为:\n${e?.key}\n用户设置公钥为:\n${t?.Settings?.PublicKey}\n如两者一致，则替换成功`,r),P.log(P.name,`检测到${e?.account?.account_type}配置文件`,`原始配置文件:\n注意！文本内容未转义！字符串中可能包含额外字符！\n${JSON.stringify(e)}`,""))}}case!1:Array.isArray(r.errors)&&r.errors.forEach((e=>{P.msg(P.name,`code: ${e.code}`,`message: ${e.message}`)}));break;case void 0:throw new Error($response)}case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((e=>P.logErr(e))).finally((()=>P.done($response)));
