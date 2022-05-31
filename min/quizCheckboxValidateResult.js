function docFindElementById(a){return document.getElementById(a)}function docRegisterElementEvent(b,c,a){if(b!=null){if(c=="onclick"){b.onclick=a}}}function docOnMouseUp(a){document.addEventListener("mouseup",function(b){if(b.which){a()}})}function docOnMouseDown(a){document.addEventListener("mousedown",function(b){if(b.which){a()}})}function docShowObject(a){if(a!=null){a.style.visibility="visible"}}function docHideObject(a){if(a!=null){a.style.visibility="hidden"}}function docSetVisibilityObject(b,a){if(a==true){docShowObject(b)}else{docHideObject(b)}}function glyFindParentGroupById(b){var a=document.getElementById(b);if(a!=null){for(let i=0;i<15;i++){if(a.getAttribute("id")=="canva-container"){return null}if((a.getAttribute("id")==null)||(a.getAttribute("id").search("genially-animated")<0)){a=a.parentNode}else{break}}}return a}function glyCheckProximity(g,f){if((g!=null)&&(f!=null)){var c=g.getBoundingClientRect().left+(g.offsetWidth/2);var j=g.getBoundingClientRect().top+(g.offsetHeight/2);var b=f.getBoundingClientRect().left+(f.offsetWidth/2);var h=f.getBoundingClientRect().top+(f.offsetHeight/2);var e=Math.abs(c-b);var d=Math.abs(j-h);var a=60;if((e<a)&&(d<a)){return true}}return false}function checkResult(){var e=glyFindParentGroupById("Success");var c=glyFindParentGroupById("Error");var b;var f=1;do{b=docFindElementById("S"+f);if(b!=null){if(b.checked==false){docHideObject(e);docShowObject(c);return}}f++}while(b!=null);var d;var a=1;do{d=docFindElementById("E"+a);if(d!=null){if(d.checked==true){docHideObject(e);docShowObject(c);return}}a++}while(d!=null);docShowObject(e);docHideObject(c)}var oSuccessObject=glyFindParentGroupById("Success");var oErrorObject=glyFindParentGroupById("Error");docHideObject(oSuccessObject);docHideObject(oErrorObject);var oValidateObject=glyFindParentGroupById("Validate");docRegisterElementEvent(oValidateObject,"onclick",checkResult);