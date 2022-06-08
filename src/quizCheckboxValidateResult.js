/**
 * Quiz - Checkbox, Validate Result
 */

/**
 * Function used to check result
 */
function checkResult() {
  
  /* Find Success and Error items */
  var oSuccessObject = glyFindParentGroupById("resultSuccess");
  var oErrorObject = glyFindParentGroupById("resultError");
  
  /* Parse all Success checkboxes */
  var oSuccessCheckbox;
  var nSuccessCheckBoxIndex = 1;
  do {
  
    /* Get current Success checkbox */
    oSuccessCheckbox = docFindElementById("S" + nSuccessCheckBoxIndex);
    if (oSuccessCheckbox != null) {
    
      /* Check if the Success checkbox is checked */
      if (oSuccessCheckbox.checked == false) {
      
        /* Checkbox is not checked, display Error result */
        docHideObject(oSuccessObject);
        docShowObject(oErrorObject);
        
        /* Result has been shown, no need to check the following checkboxes, stop treatment here */
        return;
      }
    }
    
    /* Next Success checkbox */
    nSuccessCheckBoxIndex++;
    
  } while (oSuccessCheckbox != null);
  
  /* Parse all Error checkboxes */
  var oErrorCheckbox;
  var nErrorCheckBoxIndex = 1;
  do {
  
    /* Get current Error checkbox */
    oErrorCheckbox = docFindElementById("E" + nErrorCheckBoxIndex);
    if (oErrorCheckbox != null) {
    
      /* Check if the Error checkbox is checked */
      if (oErrorCheckbox.checked == true) {
      
        /* Checkbox is checked, display Error result */
        docHideObject(oSuccessObject);
        docShowObject(oErrorObject);
        
        /* Result has been shown, no need to check the following checkboxes, stop treatment here */
        return;
      }
    }
    
    /* Next Error checkbox */
    nErrorCheckBoxIndex++;
    
  } while (oErrorCheckbox != null);
  
  /* If this point is reached this is because all the Success checkboxes are checked and no Error checkboxes is checked, show Success result in this case */
  docShowObject(oSuccessObject);
  docHideObject(oErrorObject);
}

/* Find and hide Success and Error items */
var oSuccessObject = glyFindParentGroupById("resultSuccess");
var oErrorObject = glyFindParentGroupById("resultError");
docHideObject(oSuccessObject);
docHideObject(oErrorObject);

/* Find Validate button and register 'onclick' event */
var oValidateObject = glyFindParentGroupById("buttonValidate");
docRegisterElementEvent(oValidateObject, 'onclick', checkResult);
