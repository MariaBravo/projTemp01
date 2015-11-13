"use strict";define("js/lib/useragent",["require","exports","module","js/app/polyfills"],function(require,exports,module){function browserNameIn(e){var r=["Edge","PhantomJS","Chrome","IE","Firefox","Safari","Konqueror","Opera","Googlebot"];return r.find(function(r){return t[r].test(e)})||"unknown"}function browserVersionIn(e){switch(browserNameIn(e)){case"Chrome":if(i.Chrome.test(e))return RegExp.$1;break;case"Safari":if(i.Safari.test(e))return RegExp.$1;break;case"Firefox":if(i.Firefox.test(e))return RegExp.$1;break;case"IE":if(i.IE.test(e))return RegExp.$1;if(i.IE11.test(e))return RegExp.$1;break;case"Edge":if(i.Edge.test(e))return RegExp.$1;break;case"PS3":if(i.Ps3.test(e))return RegExp.$1;break;case"PSP":if(i.Psp.test(e))return RegExp.$1;break;default:var r=/#\{name\}[\/ ]([\d\w\.\-]+)/i;if(r.test(e))return RegExp.$1}}function systemIn(r){return e.WindowsVista.test(r)?"Windows Vista":e.Windows8.test(r)?"Windows 8":e.Windows7.test(r)?"Windows 7":e.Windows2003.test(r)?"Windows 2003":e.WindowsXP.test(r)?"Windows XP":e.Windows2000.test(r)?"Windows 2000":e.Linux.test(r)?"Linux":e.OSX.test(r)?r.match(e.OSX)[0].replace("_","."):e.Ipad.test(r)?r.match(e.Ipad)[0].replace("_",".").replace("(",""):e.Iphone.test(r)?r.match(e.Iphone)[0].replace("_",".").replace("(",""):"unknown"}function platformIn(e){return r.Windows.test(e)?"Microsoft Windows":r.Mac.test(e)?"Apple Mac":r.Android.test(e)?"Android":r.Blackberry.test(e)?"Blackberry":r.Linux.test(e)?"Linux":r.Ipad.test(e)?"iPad":r.Ipod.test(e)?"iPod":r.Iphone.test(e)?"iPhone":"unknown"}function UserAgent(){var e=arguments.length<=0||void 0===arguments[0]?navigator.userAgent:arguments[0],i=/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/.test(e),t=!!e.match(n),a=browserNameIn(e),u=browserVersionIn(e),r=platformIn(e),p=systemIn(e),d=!!e.match(s),c={source:e,browser:{name:a,version:u},system:p,platform:r,isAndroid:i&&"Android"===r,isCourseraMobileApp:t,isMobile:i||t,isIOS:i&&("iPad"===r||"iPhone"===r||"iPod"===r),isPrerender:d,isRobot:d||!!e.match(o)};return c}require("js/app/polyfills");var o=/PhantomJS|Googlebot/,s=/Prerender/,n=/Coursera-Mobile/,i={Firefox:/Firefox\/([\d\w\.\-]+)/,IE:/MSIE\s([\d\.]+[\d])/,IE11:/Trident.*rv\:(11)\./,Chrome:/(?:Chrome|CriOS)\/([\d\w\.\-]+)/,Safari:/Version\/([\d\w\.\-]+)/,Ps3:/([\d\w\.\-]+)\)\s*$/,Psp:/([\d\w\.\-]+)\)?\s*$/,Edge:/Edge\/([\d\.]+)/},t={Chrome:/Chrome|CriOS/,Firefox:/Firefox/,PhantomJS:/PhantomJS/,Googlebot:/Googlebot/,IE:/MSIE|Trident.*rv\:11\./,Konqueror:/Konqueror/,Opera:/Opera/,Safari:/Safari/,Edge:/Edge/},e={Windows2000:/Windows NT 5\.0/,WindowsXP:/Windows NT 5\.1/,Windows2003:/Windows NT 5\.2/,WindowsVista:/Windows NT 6\.0/,Windows7:/Windows NT 6\.1/,Windows8:/Windows NT 6\.[2-9]/,OSX:/Mac OS X (\d+)[._](\d+)/,Linux:/Linux/i,Ipad:/\(iPad.*OS (\d+)[._](\d+)/,Iphone:/\(iPhone.*OS (\d+)[._](\d+)/},r={Windows:/Windows/,Mac:/Macintosh/,Linux:/Linux/,Ipad:/iPad/,Ipod:/iPod/,Iphone:/iPhone/,Android:/Android/,Blackberry:/Blackberry/};module.exports=UserAgent});