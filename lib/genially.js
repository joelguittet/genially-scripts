/**
 * Genially
 * Functions used to interract with Genially presentation
 */

/**
 * Find parent group with script id
 * This function is used to retrieve a group done in Genially using the id of the script element attached to it
 * @param id ID of the script element attached to the group
 * @return Group of the wanted element, null if not found
 */
function glyFindParentGroupById(id) {

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
