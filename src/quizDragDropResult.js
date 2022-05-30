/**
 * Quiz - Drag Drop and Result
 * This Genially script displays a Result feedback (OK/Error) depending of the location where an item is drag and dropped
 * Draggable item must have ID "O1" and the destinations zones must have ID "Z1", "Z2", etc.
 * The result items to be displayed have ID "OK" and "Error" (the "Error" item is optional), "OK" item is displayed if "O1" is near to "Z1", "Error" item is displayed if "O1" is near to another zone
 */

/* Listen for mouse 'up' event */
docOnMouseUp(function() {

  /* Find draggable item */
  var oObject = glyFindParentGroupById("O1");
  if (oObject == null) {
    return;
  }
  
  /* Parse all destination zones */
  var oDestinationZone;
  var nDestinationIndex = 1;
  do {
  
    /* Get current destination zone */
    oDestinationZone = glyFindParentGroupById("Z" + nDestinationIndex);
    if (oDestinationZone != null) {alert("find " + "Z" + nDestinationIndex);
    
      /* Check if the draggable item is near to the current destination zone */
      if (glyCheckProximity(oObject, oDestinationZone)) {alert("they are closed");
      
      
      
      }
    }
    
    /* Next destination zone */
    nDestinationIndex++;
    
  } while (oDestinationZone != null);
});
