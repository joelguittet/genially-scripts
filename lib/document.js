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
