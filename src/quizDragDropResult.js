/**
 * Quiz - Drag Drop and Result
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
