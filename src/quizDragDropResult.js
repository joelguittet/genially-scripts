/**
 * Quiz - Drag Drop and Result
 */

/* Listen for mouse 'up' event */
docOnMouseUp(function() {
  
  /* Find Success and Error items */
  var oSuccessObject = glyFindParentGroupById("resultSuccess");
  var oErrorObject = glyFindParentGroupById("resultError");
  
  /* Flags to compute Success and Error visibility */
  var bHideSuccess = false;
  var bShowError = false;

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
      var bDestinationFound = false;
      do {
  
        /* Get current destination zone */
        oDestinationZone = glyFindParentGroupById("Z" + nDestinationIndex);
        if (oDestinationZone != null) {
    
          /* Check if the current draggable item is closed to the current destination zone */
          if (glyCheckProximity(oDraggableObject, oDestinationZone) == true) {
          
            /* Draggable item is closed to a destination zone */
            bDestinationFound = true;
            
            /* Check current draggable item and destination zone and display Match result */
            var oMatchObject = glyFindParentGroupById("M" + nDraggableIndex);
            if (nDraggableIndex == nDestinationIndex) {
              docShowObject(oMatchObject);
            } else {
              docHideObject(oMatchObject);
              bShowError = true;
            }
          } else {
          
            /* Draggable item is not closed to a destination zone */
            bHideSuccess = true;
          }
        }
    
        /* Next destination zone */
        nDestinationIndex++;
    
      } while ((oDestinationZone != null) && (bDestinationFound == false));
    }
    
    /* Next draggable item */
    nDraggableIndex++;
    
  } while (oDraggableObject != null);
  
  /* Check if Success and Error results should be shown/hidden */
  if (bShowError == true) {
    docHideObject(oSuccessObject);
    docShowObject(oErrorObject);
  } else if (bHideSuccess == false) {
    docShowObject(oSuccessObject);
    docHideObject(oErrorObject);
  } else {
    docHideObject(oSuccessObject);
    docHideObject(oErrorObject);
  }
});

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

/* Find and hide Success and Error items */
var oSuccessObject = glyFindParentGroupById("resultSuccess");
var oErrorObject = glyFindParentGroupById("resultError");
docHideObject(oSuccessObject);
docHideObject(oErrorObject);
