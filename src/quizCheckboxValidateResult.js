/**
 * Quiz - Checkbox, Validate Result
 */

var validate = false;

/**
 * Function called when validate button is clicked
 */
function setValidate() {

  /* Indicate validate button has been clicked */
  validate = true;
  console.log("validated!");
}

/**
 * Function used to check result
 */
function checkResult() {
  
  /* Find Success and Error items */
  var oSuccessObject = glyFindParentGroupById("Success");
  var oErrorObject = glyFindParentGroupById("Error");
  
  /* Check if validate button has been clicked */
  if (false == validate) {
  
    /* Hide result and stop treatment here */
    docHideObject(oSuccessObject);
    docHideObject(oErrorObject);
    return;
  }
  
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
/*var oSuccessObject = glyFindParentGroupById("Success");
var oErrorObject = glyFindParentGroupById("Error");
docHideObject(oSuccessObject);
docHideObject(oErrorObject);*/

/* Find Validate button and register 'onclick' event */
var oValidateObject = glyFindParentGroupById("Validate");alert(oValidateObject.getAttribute("class"));
docRegisterElementEvent(oValidateObject, 'onclick', setValidate);

/* Periodically check result to be displayed */
checkResult();
setInterval(checkResult, 500);
