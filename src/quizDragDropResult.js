/**
 * Quiz - Drag Drop and Result
 * This Genially script displays a Result feedback (Success/Error) depending of the location where an item is drag and dropped
 * Draggable item must have ID "O1" and the destinations zones must have ID "Z1", "Z2", etc.
 * The result items to be displayed have ID "Success" and "Error" (they are both optional), "Success" item is displayed if "O1" is near to "Z1", "Error" item is displayed if "O1" is near to another zone
 */

/* Listen for mouse 'up' event */
docOnMouseUp(function() {

  /* Find draggable item */
  var oDraggableObject = glyFindParentGroupById("O1");
  if (oDraggableObject == null) {
    return;
  }
  
  /* Find Success and Error items */
  var oSuccessObject = glyFindParentGroupById("Success");
  var oErrorObject = glyFindParentGroupById("Error");
  
  /* Parse all destination zones */
  var oDestinationZone;
  var nDestinationIndex = 1;
  do {
  
    /* Get current destination zone */
    oDestinationZone = glyFindParentGroupById("Z" + nDestinationIndex);
    if (oDestinationZone != null) {
    
      /* Check if the draggable item is near to the current destination zone */
      if (glyCheckProximity(oDraggableObject, oDestinationZone)) {
      
        /* Check current destination zone and display Success or Error result */
        if (nDestinationIndex == 1) {
          docShowObject(oSuccessObject);
          docHideObject(oErrorObject);
        } else {
          docHideObject(oSuccessObject);
          docShowObject(oErrorObject);
        }
        
        /* Destination zone found, no need to check the following zones, stop treatment here */
        return;
      }
    }
    
    /* Next destination zone */
    nDestinationIndex++;
    
  } while (oDestinationZone != null);
  
  /* If this point is reached this is because the draggable item is not near to a destination zone, hide Success and Error results in this case */
  docHideObject(oSuccessObject);
  docHideObject(oErrorObject);
});

/* Find and hide Success and Error items */
var oSuccessObject = glyFindParentGroupById("Success");
var oErrorObject = glyFindParentGroupById("Error");
docHideObject(oSuccessObject);
docHideObject(oErrorObject);
