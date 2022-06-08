# quizCheckboxValidateResult

The purpose of this script is to display a result feedback (Success/Error) depending of the some Success/Error checkboxes status.

## Usage

The Success checkboxes items are HTML elements as shown below:

```
<input type="checkbox" id="Sx" style="border:0px;width:100%;height:2em;"><script></script>
```

It is possible to define multiple checkboxes with ID `Sx` where `x` is a number starting at 1.

The Error checkboxes items are HTML elements as shown below:

```
<input type="checkbox" id="Ex" style="border:0px;width:100%;height:2em;"><script></script>
```

It is possible to define multiple checkboxes with ID `Ex` where `x` is a number starting at 1.

The Validate button item is grouped with an HTML element as shown below:

```
<div id="buttonValidate"></div><script></script>
```

The Success result item is grouped with an HTML element as shown below:

```
<div id="resultSuccess"></div><script></script>
```

The Success element is optional and will be shown if all the Success checkboxes and no Error checkboxes are checked when the Validate button is clicked.

The Error result item is grouped with an HTML element as shown below:

```
<div id="resultError"></div><script></script>
```

The Error element is optional and will be shown if not all the Success checkboxes or at least one Error checkboxes are checked when the Validate button is clicked.

Animations on the Success and Error elements should be added in order to display the elements with a 0.5s delay when the page is loaded. This permit the script to initialize elements.

The script is inserted in the presentation using an HTML element as shown below:

```
<div id="quizCheckboxValidateResult">quizCheckboxValidateResult</div><script>
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    eval(request.responseText);
  }
};
request.open('GET', 'https://raw.githubusercontent.com/joelguittet/genially-scripts/master/min/quizCheckboxValidateResult.js', true);
request.send(null);
</script>
```

## Alternative

It is possible to use radio buttons if only one Success item is expected.

In this case the Success radio button item is HTML element as shown below:

```
<input type="radio" id="S1" name="G1" style="border:0px;width:100%;height:2em;"><script></script>
```

And the Error radio button items are HTML elements as shown below:

```
<input type="radio" id="Ex" name="G1" style="border:0px;width:100%;height:2em;"><script></script>
```
