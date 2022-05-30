/**
 * Quiz - Drag Drop and Result
 * This Genially script displays a Result feedback (OK/Error) depending of the location where an item is drag and dropped
 */

/**
 * Find parent group with script id
 * This function is used to retrieve a group done in Genially using the id of the script element attached to it
 * @param id ID of the script element attached to the group
 * @return Group of the wanted element, null if not found
 */
function glyFindParentGroupById(id) {
alert("try to find");
  var oObject = document.getElementById(id);
  for (let i = 0; i < 15; i++) {
    if (oObject.getAttribute("id") == "canva-container") {
      /* Unableto find the group, maybe we are in edition mode ? */
      return null;
    }
    if ((oObject.getAttribute("id") == null) || (oObject.getAttribute("id").search("genially-animated") < 0)) {
      /* Go to parent element */
      oObject = oObject.parentNode;
    } else {
      /* Found the wanted element */
      break;
    }
  }
  return oObject;
}

//import * as library from "https://raw.githubusercontent.com/joelguittet/genially-scripts/master/src/library.js";

//function main()
//  glyFindParentGroupById();
//  alert("end");
//}

/* First load and evaluate library - This import functions used in the Genially scripts */
/*var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    eval(request.responseText);
    alert("begin ok");
    glyFindParentGroupById("id_test");
    alert("end ok");
  }
};
request.open('GET', 'https://raw.githubusercontent.com/joelguittet/genially-scripts/master/src/library.js', true);
request.send(null);*/

alert("begin ok");
glyFindParentGroupById("id_test");
alert("end ok");
