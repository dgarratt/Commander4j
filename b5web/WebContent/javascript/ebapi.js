var Rho=Rho||(function(P){var X="rhoapi.js";var V="__rhoID";var ak="__rhoClass";var F="__rhoCallback";var A="/system/js_api_entrypoint";var v="";var u="0";var ae={isFunction:function(al){return"function"===typeof al},isPlainObject:function(al){return al&&"object"===typeof al},isArray:function(al){return(al&&"Array"==(al).constructor.name)},extend:function(){var al,ar,am,an,av,at,aq=arguments[0]||{},ap=1,ao=arguments.length,au=false;if(typeof aq==="boolean"){au=aq;aq=arguments[ap]||{};ap++}if(typeof aq!=="object"&&!ae.isFunction(aq)){aq={}}if(ap===ao){aq=this;ap--}for(;ap<ao;ap++){if((av=arguments[ap])!=null){for(an in av){al=aq[an];am=av[an];if(aq===am){continue}if(au&&am&&(ae.isPlainObject(am)||(ar=ae.isArray(am)))){if(ar){ar=false;at=al&&ae.isArray(al)?al:[]}else{at=al&&ae.isPlainObject(al)?al:{}}aq[an]=ae.extend(au,at,am)}else{if(am!==undefined){aq[an]=am}}}}}return aq},ajax:function(ap){if(!ap){return}function an(){if(typeof XMLHttpRequest!=="undefined"){return new XMLHttpRequest()}else{var at=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];for(var av=0,ar=at.length;av<ar;av++){try{return new ActiveXObject(at[av])}catch(au){}}}return null}var aq=an();function al(ar){return function(){if(ar.readyState<4){return}if(ar.status!==200&&ar.status!==0){(ap.error||function(){})(ar,"error",ar.statusText);return}if(ar.readyState===4){var au=null;try{au=JSON.parse(ar.responseText)}catch(at){}(ap.success||function(){})(au,"success",ar)}}}if(ap.async===true){aq.onreadystatechange=al(aq)}aq.open(ap.type||"get",ap.url||"",ap.async===true);var ao=ap.headers||{};for(var am in ao){if(!ao.hasOwnProperty(am)){continue}aq.setRequestHeader(am,ao[am])}aq.send(ap.data);if(ap.async!==true){al(aq)()}},each:function(am,an){if(this.isArray(am)){am.forEach(function(ap,ao){an(ao,ap)})}else{for(var al in am){if(am.hasOwnProperty(al)){an(al,am[al])}}}}};var L=0;var x={};function aa(){return window.__rhoJsVmID||null}function s(){}function b(al){if("undefined"==typeof al||!al){al=V}return(al+"#"+L++)}function E(al){if(al&&"string"==typeof al){return(al.toLowerCase()=="true")}return false}function h(ao,am,an){if("string"==typeof ao){return ao}if("function"!=typeof ao){ao=s}if("undefined"==typeof an||!an){an=b()}var al={id:an,callback:ao,isPersistent:("undefined"!=typeof am)&&am};x[an]=al;return v+an}function Q(al){for(var am in al){if(!al.hasOwnProperty(am)){continue}if("object"==typeof al[am]){al[am]=r(al[am])}}return al}function r(al){if((al!=null)&&("object"==typeof al)){if(al[V]&&al[ak]){return M(al[ak],al[V])}else{return Q(al)}}return al}function k(al){if("undefined"==typeof al){throw"Invalid API JSON response"}if(null==al||"object"!=typeof al){return al}var am=ae.extend(al instanceof Array?[]:{},al);return r(am)}function e(an){var am={};if("string"==typeof an){an=an.split(/[\s\,]/)}if(an instanceof Array){for(var al=0;al<an.length;al++){if(0<an[al].length){am[an[al]]=null}}}else{if(an instanceof Object){am=an}}return am}function T(ao){var an=[];if("string"==typeof ao){ao=ao.split(/[\s\,]/)}if(ao instanceof Array){for(var am=0;am<ao.length;am++){if(0<ao[am].length){an.push(ao[am])}}}else{if(ao instanceof Object){for(var al in ao){if(ao.hasOwnProperty(al)&&0<al.length){an.push(al)}}}}return an}var ag=0;function o(al,am){if("function"!=typeof am){return am}return F+":"+h(am,true)}function N(ao){var ap=null;if("number"==typeof ao.valueCallbackIndex){if(ao.valueCallbackIndex<ao.args.length-1){throw"Generated API method error: wrong position for value callback argument!"}if(ao.valueCallbackIndex==ao.args.length-1){ap=ao.args.pop()}if(ap&&"function"!=typeof ap){throw"Value callback should be a function!"}}var at=null;var an=null;if("number"==typeof ao.persistentCallbackIndex){if(ao.persistentCallbackIndex<ao.args.length-2){throw"Generated API method error: wrong position for persistent callback argument!"}if(ao.persistentCallbackIndex==ao.args.length-2){an=ao.args.pop();at=ao.args.pop()}else{if(ao.persistentCallbackIndex==ao.args.length-1){at=ao.args.pop()}}if(at&&"function"!=typeof at){throw"Persistent callback should be a function!"}if(an&&"string"!=typeof an){throw"Persistent callback optional parameters should be a string!"}var an=an||null;if(at){at=h(at,true)}}var am={method:ao.method,params:ao.args};am[ak]=ao.module;am[V]=ao.instanceId||null;am.jsonrpc="2.0";am.id=ag++;if(at){am[F]={id:at,vmID:aa(),optParams:an}}var aq=JSON.stringify(am,o);var au=null;function ar(av){au=k(av);if(ap){ap(au)}}function al(av){throw av.message}Rho.platform.nativeApiCall(aq,null!=ap,function(av){if(av.error){al(av.error)}else{ar(av.result)}});return(null!=ap)?null:au}function af(al){return function(am){am.args=Array.prototype.slice.call(am.args);if("getProperties"==am.method&&0<am.args.length){am.args[0]=T(am.args[0])}am.module=al;am.method=am.method;return N(am)}}function Y(al,ap,ao){var aq=ap;var at=al;var an=false;if("function"==typeof aq){if("function"==typeof at&&!ao){throw"Namespace definition conflict!"}an=true;aq=al;at=ap}for(var ar in aq){if(!aq.hasOwnProperty(ar)){continue}if(at.hasOwnProperty(ar)&&!ao){continue}if("prototype"==ar){if(an){continue}if("object"!=typeof at[ar]){at[ar]={}}for(var am in aq[ar]){if(!aq[ar].hasOwnProperty(am)){continue}at[ar][am]=aq[ar][am]}continue}at[ar]=aq[ar]}return at}function Z(ar,aq,al){aq=aq||{};var at=window;var an=ar.split(/[\:\.]/);var au="";for(var ao=0;ao<an.length;ao++){var am=an[ao];au=au+(ao==0?"":".")+am;var ap=at[am];if(!(ap instanceof Object||"undefined"==typeof ap)){throw"Namespace "+au+" is already defined and it isn't an object!"}if(ao==an.length-1){if(at[am]){at[am]=Y(at[am],aq,al)}else{at[am]=aq}}at[am]=at[am]||{};at=at[am]}return at}var O={ffHackKeywords:false,ffHackMethod:false,js185:false};(function y(){O.ffHackKeywords=(function am(){var ap={};var ao=false;var ar=false;try{ap={get propGet(){ao=true;return ao},set propSet(at){ar=at}};ap.propSet=ap.propGet}catch(aq){}return ao&&ar})();O.ffHackMethod=(function an(){var ap={};var ao=false;var ar=false;try{ap.__defineGetter__("propGet",function(){ao=true;return ao});ap.__defineSetter__("propSet",function(at){ar=at});ap.propSet=ap.propGet}catch(aq){}return ao&&ar})();O.js185=(function al(){var ap={};var ao=false;var ar=false;try{Object.defineProperty(ap,"propGet",{get:function(){ao=true;return ao}});Object.defineProperty(ap,"propSet",{set:function(at){ar=at}});ap.propSet=ap.propGet}catch(aq){}return ao&&ar})()})();var m=function(ao,aq,al,ap){var an=aq.split(":")[0];function am(ar,ax){var aw=ax.split(":");var av=aw[0];var au=aw[1];var at=aw[2];if(("get"==ar)&&au){return au}if(("set"==ar)&&at){return at}return ar+av.charAt(0).toUpperCase()+av.slice(1)}if(null!=al&&"function"==typeof al){ao[am("get",aq)]=al}if(null!=ap&&"function"==typeof ap){ao[am("set",aq)]=ap}};var a=m;if(O.js185){a=function(ao,aq,al,ap){var an=aq.split(":")[0];var am={configurable:true,enumerable:false};if(null!=al&&"function"==typeof al){am.get=al}if(null!=ap&&"function"==typeof ap){am.set=ap}Object.defineProperty(ao,an,am)}}else{if(O.ffHackMethod){a=function(an,ap,al,ao){var am=ap.split(":")[0];an.__defineGetter__(am,al);an.__defineSetter__(am,ao)}}else{}}function l(ap,ao,am,al,ar){var aq=("w"==am);var au=ao.split(":");ao=au[0];var an=ao;var at=ao+"=";if(2<au.length){at=au[2]}if(1<au.length){an=au[1]}return function(){try{if("function"==typeof ar){return ar.apply(this,arguments)}}catch(av){throw"Custom accessor function exception: "+av}return ap({instanceId:("function"==typeof al)?al.apply(this,[]):u,args:arguments,method:aq?at:an,valueCallbackIndex:(aq?1:0)})}}var t=[];function q(an,au,ap,al){if(!(au instanceof Array)){throw"Property definitions list should be Array instance"}for(var ao=0;ao<au.length;ao++){var av=au[ao];var ar=av.propAccess;var at=(0<=ar.indexOf("r"))?l(ap,av.propName,"r",al,av.customGet):null;var am=(0<=ar.indexOf("w"))?l(ap,av.propName,"w",al,av.customSet):null;try{a(an,av.propName,at,am)}catch(aq){t.push(name)}m(an,av.propName,at,am)}}function C(ap,an,ao){if(!(an instanceof Array)){throw"Property definitions list should be Array instance"}if(a!=m||true==ao){for(var am=0;am<an.length;am++){var aq=an[am];try{a(ap,aq.propName,aq.propGetter,aq.propSetter)}catch(al){t.push(name)}}}}function d(ap,am,ao,al,an){return function(){return al({instanceId:("function"==typeof an)?an.apply(this,[]):u,args:arguments,method:ap,persistentCallbackIndex:am,valueCallbackIndex:ao})}}function ah(ap,ar,al,ao){if(!(ar instanceof Array)){throw"Property definitions list should be Array instance"}for(var an=0;an<ar.length;an++){var aq=ar[an];try{ap[aq.methodName]=d(aq.nativeName,aq.persistentCallbackIndex,aq.valueCallbackIndex,al,ao)}catch(am){t.push(aq.methodName)}}}function j(an,am,al){if(!am){throw"No parent namespace for alias!"}if(am[al]){throw"Alias definition conflict!"}am[al]=an}function M(am,an){var al={};al[ak]=am;al[V]=an;return new (Z(am))(al)}function w(ao,an,al){var ap=document.createElement(an);for(var am in al){if(!al.hasOwnProperty(am)){continue}ap.setAttribute(am,al[am])}ao.appendChild(ap)}function D(al){w(document.getElementsByTagName("head")[0],"link",{rel:"stylesheet",href:al})}function i(al){w(document.getElementsByTagName("head")[0],"script",{type:"text/javascript",src:al})}function c(ao){var ap=null;var al=document.getElementsByTagName("script");for(var an=0;an<al.length;an++){var am=(al[an].getAttribute("src")||"").replace(/\?.*$/gi,"");if(am.indexOf(ao,am.length-ao.length)!==-1){ap=al[an];break}}return ap}var K=c(X);function ai(al){if(null==K||null==al||!al){return}var am=K.getAttribute("src");i(am.replace(X,al+".js"))}function H(al){if(null==al){return}var am=[];if("object"==typeof al&&"Array"==al.constructor.name){am=al}if("string"==typeof al){am=al.trim().split(/[,\s]+/)}for(var ao=0;ao<am.length;ao++){var an=am[ao].trim();if(0<an.length){an=(0==an.indexOf("Rho."))?an:"rho."+an;ai(an)}}}if(null!=K){H(K.getAttribute("data-api-modules"))}function p(aq,am){var an=decodeURIComponent(aq);var ap=x[an];if("object"==typeof ap&&ap){if("function"==typeof ap.callback){var al=null;var ao=null;if(am){ao=am.error;if(!ao){al=k(am.result)}}ap.callback(al,ao)}if(!ap.isPersistent){delete x[an]}}}var ad="RHO_AJAX-->12345<--PORT_NUMBER";var g="http://127.0.0.1";var B=null;function J(){if(B){return B}var am=window[Rho.util.flag.API_AJAX_URL];if(am){return(B=am)}if(0!=window.location.protocol.indexOf("file")){return(B=A)}var an=ad.replace(/[\-<>A-Z_]*/g,"");var al=Number(an);if(0<an.length&&!isNaN(al)){return(B=(g.replace(/\/$/,"")+":"+al+A))}throw"Unknown API AJAX URL for application loaded with file:// protocol"}function W(an,am,al){ae.ajax({async:am,type:"post",url:J(),data:an,dataType:"json",headers:{Accept:"text/plain"},success:function(ao){al(ao)},error:function(aq,ao,ap){al({error:{message:ap,code:aq.status}})}})}function I(al){if("undefined"!=typeof window.RhoOld){if("object"==typeof window.RhoOld){for(var am in window.RhoOld){if(window.RhoOld.hasOwnProperty(am)&&"undefined"!=typeof window.RhoOld[am]&&"undefined"==typeof al[am]){al[am]=window.RhoOld[am]}}}window.RhoOld=undefined}return al}var S={flag:{API_AJAX_URL:"__rho_apiAjaxURL",USE_AJAX_BRIDGE:"__rho_useAjaxBridge",NATIVE_BRIDGE_TYPE:"__rho_nativeBridgeType"},loadApiModules:H,namespace:Z,namespaceAlias:j,apiReqFor:af,namesToProps:e,namesToArray:T,createPropsProxy:q,createRawPropsProxy:C,createMethodsProxy:ah,methodAccessReqFunc:d,incompatibleProps:t,rhoIdParam:function(){return V},rhoClassParam:function(){return ak},nextId:b};var n={id:{AJAX:"ajax",AUTO:"auto",RHOSIMULATOR:"rhosimulator",ANDROID:"android",IPHONE:"iphone",WP8:"wp8",WM:"wm",WIN32:"win32"},nativeApiCall:W,nativeApiResult:function(){}};var U=I({jQuery:ae,util:S,platform:n,callbackHandler:p});var ab="__rhoNativeApiCall";var R="__rhoNativeApi";var z={};var f=function(am,al){z[am]=function(){var an=al();an.apiCall.platformId=am;return an}};f(n.id.ANDROID,function(){return{apiCall:function(ao,an,am){var al={};if(window[R]&&"function"==typeof window[R]["apiCall"]){al=window[R].apiCall(ao,an)}else{al=prompt(ao,ab+":prompt")}am(JSON.parse(al))}}});f(n.id.IPHONE,function(){return window[R]||{apiCall:function(ao,am,al){var an={};an[ab]=ao;ae.ajax({async:am,type:"head",url:"/!"+R+"?"+(+new Date()),dataType:"json",headers:an,success:function(ar,ap,aq){al(JSON.parse(aq.responseText))},error:function(ar,ap,aq){al({error:{message:aq,code:ar.status}})}})}}});f(n.id.WP8,function(){var al=undefined;n.nativeApiResult=function(am){al=am};window.__rhoNativeApiResult=n.nativeApiResult;return{apiCall:function(ao,an,am){window.external.notify(ao);am(JSON.parse(al))}}});f(n.id.WM,function(){var al=new WebkitBridge();return{apiCall:function(ao,an,am){var ap=al.framework(ao);am(JSON.parse(ap))}}});f(n.id.RHOSIMULATOR,function(){return{apiCall:function(ao,an,am){var al={};if(window[R]&&"function"==typeof window[R]["apiCall"]){al=window[R].apiCall(ao,an)}am(JSON.parse(al))}}});f(n.id.WIN32,function(){return{apiCall:function(ao,an,am){var al={};if(window[R]&&"function"==typeof window[R]["apiCall"]){al=window[R].apiCall(ao,an)}am(JSON.parse(al))}}});var G=n.nativeApiCall;f(n.id.AJAX,function(){return{apiCall:G}});var aj=[[/RhoSimulator/,z[n.id.RHOSIMULATOR]],[/Android/,z[n.id.ANDROID]],[/iPhone|iPod|iPad/,z[n.id.IPHONE]],[/Windows\s+Phone/,z[n.id.WP8]],[/Windows\s+(?:Mobile|CE)|WM [0-9]/,z[n.id.WM]],[/Windows/,z[n.id.WIN32]]];var ac=z[n.id.ANDROID];n.nativeApiCall=function(){var al=z[window[S.flag.NATIVE_BRIDGE_TYPE]]||ac;al().apiCall.apply(this,arguments)};return U})("undefined"==typeof jQuery?undefined:jQuery);var EB=Rho;