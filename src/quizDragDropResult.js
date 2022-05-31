/**
 * Quiz - Drag Drop and Result
 */

/* Listen for mouse 'up' event */
docOnMouseUp(function() {
  
  /* Find Success and Error items */
  var oSuccessObject = glyFindParentGroupById("Success");
  var oErrorObject = glyFindParentGroupById("Error");
  
  /* Flag to indicate Success and Error items should be hidden */
  var bHideAll = true;

  /* Parse all draggable items */
  var oDraggableObject;
  var nDraggableIndex = 1;
  do {

    /* Get current draggable object */
    oDraggableObject = glyFindParentGroupById("O" + nDraggableIndex);
    if (oDraggableObject != null) {
    
      /* Parse all destination zones */
      var oDestinationZone;
      var nDestinationIndex = 1;
      do {
  
        /* Get current destination zone */
        oDestinationZone = glyFindParentGroupById("Z" + nDestinationIndex);
        if (oDestinationZone != null) {
    
          /* Check if the current draggable item is closed to the current destination zone */
          if (glyCheckProximity(oDraggableObject, oDestinationZone) == true) {
          
            /* Check current draggable item and destination zone and display Match result */
            var oMatchObject = glyFindParentGroupById("M" + nDraggableIndex);
            if (nDraggableIndex == nDestinationIndex) {
              docShowObject(oMatchObject);
            } else {
              docHideObject(oMatchObject);
            }
            
            /* Check current draggable item and destination zone and display Success or Error result */
            if (nDraggableIndex == nDestinationIndex) {
              docShowObject(oSuccessObject);
              docHideObject(oErrorObject);
            } else {
              docHideObject(oSuccessObject);
              docShowObject(oErrorObject);
            }
            
            /* At least one of the result is shown */
            bHideAll = false;
          }
        }
    
        /* Next destination zone */
        nDestinationIndex++;
    
      } while (oDestinationZone != null);
    }
    
    /* Next draggable item */
    nDraggableIndex++;
    
  } while (oDraggableObject != null);
  
  /* Check if Success and Error results should be hidden */
  if (bHideAll == true) {
    docHideObject(oSuccessObject);
    docHideObject(oErrorObject);
  }
});

/* Find and hide Success and Error items */
var oSuccessObject = glyFindParentGroupById("Success");
var oErrorObject = glyFindParentGroupById("Error");
docHideObject(oSuccessObject);
docHideObject(oErrorObject);

/* Find and hide all Match items */
var oMatchObject;
var nMatchIndex = 1;
do {
  oMatchObject = glyFindParentGroupById("M" + nMatchIndex);
  if (oMatchObject != null) {
    docHideObject(oMatchObject);
  }
  nMatchIndex++;
} while (oMatchObject != null);
