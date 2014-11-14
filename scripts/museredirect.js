/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
typeof Muse=="undefined"&&(Muse={});Muse.Redirect={};Muse.Redirect.domPrefixes=["Webkit","Moz","O","ms","Khtml"];Muse.Redirect.Touch=function(){if(navigator.maxTouchPoints>1)return!0;for(var a=0,b=Muse.Redirect.domPrefixes.length;a<b;a++){var c=Muse.Redirect.domPrefixes[a]+"MaxTouchPoints";if(c in navigator&&navigator[c])return!0}try{return document.createEvent("TouchEvent"),!0}catch(d){}return!1}();
Muse.Redirect.readCookie=function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return null};
Muse.Redirect.redirect=function(a,b,c,d){var f=null,g=Muse.Redirect.readCookie("devicelock"),k=Muse.Redirect.readCookie("inbrowserediting")=="true";k||(g=="phone"&&c?f=c:g=="tablet"&&b&&(f=b));!k&&g!=a&&f==null&&(d?d=="phone"&&c?f=c:d=="tablet"&&b&&(f=b):(a=Math.min(screen.width,screen.height)/(window.devicePixelRatio||1),d=window.screen.systemXDPI||0,g=window.screen.systemYDPI||0,d=d>0&&g>0?Math.min(screen.width/d,screen.height/g):0,(a<=370||d!=0&&d<=3)&&c?f=c:a<=960&&b&&Muse.Redirect.Touch&&(f=
b)));if(f!=null)document.location=f,document.write('<style type="text/css">body {visibility:hidden}</style>')};
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"museredirect.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.2.1.284"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("museredirect.js");break}}}}})();
