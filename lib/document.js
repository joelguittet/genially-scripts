/**
 * Document
 * Functions used to interact with HTML document
 */

/**
 * Add callback to mouse 'up' event
 * @param callback Callback to be called on mouse 'up' event
 */
function docOnMouseUp(callback) {

  /* Listen for mouse 'up' event */
  document.addEventListener('mouseup', function(event) {
    if (event.which) callback();
  });
}


/**
 * Add callback to mouse 'down' event
 * @param callback Callback to be called on mouse 'down' event
 */
function docOnMouseDown(callback) {

  /* Listen for mouse 'down' event */
  document.addEventListener('mousedown', function(event) {
    if (event.which) callback();
  });
}

/**
 * Show the wanted object
 * @param oObject Object to show
 */
function docShowObject(oObject) {

  /* Set visibility */
  oObject.style.visibility = "visible";
}

/**
 * Hide the wanted object
 * @param oObject Object to hide
 */
function docHideObject(oObject) {

  /* Set visibility */
  oObject.style.visibility = "hidden";
}

/**
 * Set visibility of the wanted object
 * @param oObject Object to show or hide
 * @param bShow true to show the object, false otherwise
 */
function docSetVisibilityObject(oObject, bShow) {

  /* Set visibility */
  if (bShow == true) {
    docShowObject(oObject);
  } else {
    docHideObject(oObject);
  }
}
