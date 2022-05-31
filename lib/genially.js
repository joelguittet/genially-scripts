/**
 * Genially
 * Functions used to interact with Genially presentation
 */

/**
 * Find parent group with script id
 * This function is used to retrieve a group done in Genially using the id of the script element attached to it
 * @param id ID of the script element attached to the group
 * @return Group of the wanted element, null if not found
 */
function glyFindParentGroupById(id) {

  /* Get element */
  var oObject = document.getElementById(id);
  if (oObject != null) {
  
    /* Find parent group */
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
  }

  return oObject;
}

/**
 * Check if two elements are closed each other
 * This function is generally used to check if a draggable item is closed to a destination zone
 * @param oObject1 First object
 * @param oObject2 Second object
 * @return true if the two objects are closed each other, false otherwise
 */
function glyCheckProximity(oObject1, oObject2) {

  /* Check if the objects exist */
  if ((oObject1 != null) && (oObject2 != null)) {
   
    /* Compute centers of objects */
    var nObjectCenterX1 = oObject1.getBoundingClientRect().left + (oObject1.offsetWidth / 2);
    var nObjectCenterY1 = oObject1.getBoundingClientRect().top + (oObject1.offsetHeight / 2);
    var nObjectCenterX2 = oObject2.getBoundingClientRect().left + (oObject2.offsetWidth / 2);
    var nObjectCenterY2 = oObject2.getBoundingClientRect().top + (oObject2.offsetHeight / 2);
    
    /* Compute distance between objects */
    var nDeltaX = Math.abs(nObjectCenterX1 - nObjectCenterX2);
    var nDeltaY = Math.abs(nObjectCenterY1 - nObjectCenterY2);
    
    /* Tolerance to apply */
    var nTolerance = 60;
    if ((nDeltaX < nTolerance) && (nDeltaY < nTolerance)) {
      return true;
    }
  }
  
  return false;
}
