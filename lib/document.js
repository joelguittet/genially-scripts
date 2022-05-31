/**
 * Document
 * Functions used to interact with HTML document
 */

/**
 * Find element with id
 * This function is used to retrieve an element using the id of the element
 * @param id ID of the element
 * @return Wanted element, null if not found
 */
function docFindElementById(id) {

  /* Return element */
  return document.getElementById(id);
}

/**
 * Register an event on an element
 * @param oObject Object to register an event on
 * @param sEvent Event as string
 * @param callback  Callback to be called on event
 */
function docRegisterElementEvent(oObject, sEvent, oCallback) {

  /* Check if the object exists */
  if (oObject != null) {
  
    /* Treatment depending of the event */
    if (sEvent == "onclick") {
      oObject.onclick = oCallback;
    }
  }
}

/**
 * Add callback to mouse 'up' event
 * @param oCallback Callback to be called on mouse 'up' event
 */
function docOnMouseUp(oCallback) {

  /* Listen for mouse 'up' event */
  document.addEventListener('mouseup', function(event) {
    if (event.which) oCallback();
  });
}


/**
 * Add callback to mouse 'down' event
 * @param oCallback Callback to be called on mouse 'down' event
 */
function docOnMouseDown(oCallback) {

  /* Listen for mouse 'down' event */
  document.addEventListener('mousedown', function(event) {
    if (event.which) oCallback();
  });
}

/**
 * Show the wanted object
 * @param oObject Object to show
 */
function docShowObject(oObject) {

  /* Set visibility */
  if (oObject != null) {
    oObject.style.visibility = "visible";
  }
}

/**
 * Hide the wanted object
 * @param oObject Object to hide
 */
function docHideObject(oObject) {

  /* Set visibility */
  if (oObject != null) {
    oObject.style.visibility = "hidden";
  }
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
