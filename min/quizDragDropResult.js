function docFindElementById(a){return document.getElementById(a)}function docRegisterElementEvent(b,c,a){if(b!=null){if(c=="onclick"){b.onclick=a}}}function docOnMouseUp(a){document.addEventListener("mouseup",function(b){if(b.which){a()}})}function docOnMouseDown(a){document.addEventListener("mousedown",function(b){if(b.which){a()}})}function docShowObject(a){if(a!=null){a.style.visibility="visible"}}function docHideObject(a){if(a!=null){a.style.visibility="hidden"}}function docSetVisibilityObject(b,a){if(a==true){docShowObject(b)}else{docHideObject(b)}}function glyFindParentGroupById(b){var a=document.getElementById(b);if(a!=null){for(let i=0;i<15;i++){if(a.getAttribute("id")=="canva-container"){return null}if((a.getAttribute("id")==null)||(a.getAttribute("id").search("genially-animated")<0)){a=a.parentNode}else{break}}}return a}function glyCheckProximity(g,f){if((g!=null)&&(f!=null)){var c=g.getBoundingClientRect().left+(g.offsetWidth/2);var j=g.getBoundingClientRect().top+(g.offsetHeight/2);var b=f.getBoundingClientRect().left+(f.offsetWidth/2);var h=f.getBoundingClientRect().top+(f.offsetHeight/2);var e=Math.abs(c-b);var d=Math.abs(j-h);var a=60;if((e<a)&&(d<a)){return true}}return false}docOnMouseUp(function(){var g=glyFindParentGroupById("Success");var e=glyFindParentGroupById("Error");var h=true;var f;var b=1;do{f=glyFindParentGroupById("O"+b);if(f!=null){var c;var a=1;do{c=glyFindParentGroupById("Z"+a);if(c!=null){if(glyCheckProximity(f,c)==true){var d=glyFindParentGroupById("M"+b);if(b==a){docShowObject(d)}else{docHideObject(d)}if(b==a){docShowObject(g);docHideObject(e)}else{docHideObject(g);docShowObject(e)}h=false}}a++}while(c!=null)}b++}while(f!=null);if(h==true){docHideObject(g);docHideObject(e)}});var oSuccessObject=glyFindParentGroupById("Success");var oErrorObject=glyFindParentGroupById("Error");docHideObject(oSuccessObject);docHideObject(oErrorObject);var oMatchObject;var nMatchIndex=1;do{oMatchObject=glyFindParentGroupById("M"+nMatchIndex);if(oMatchObject!=null){docHideObject(oMatchObject)}nMatchIndex++}while(oMatchObject!=null);