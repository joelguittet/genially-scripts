/**
 * Quiz - Drag Drop and Result
 * This Genially script displays a Result feedback (OK/Error) depending of the location where an item is drag and dropped
 */

//import { glyFindParentGroupById } from "https://raw.githubusercontent.com/joelguittet/genially-scripts/master/src/library.js";

//function main()
//  glyFindParentGroupById();
//  alert("end");
//}

/* First load and evaluate library - This import functions used in the Genially scripts */
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    eval(request.responseText);
alert("begin ok");
glyFindParentGroupById("id_test");
alert("end ok");
  }
};
request.open('GET', 'https://raw.githubusercontent.com/joelguittet/genially-scripts/master/src/library.js', true);
request.send(null);
