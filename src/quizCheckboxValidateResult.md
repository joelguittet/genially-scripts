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
<div id="Validate"></div><script></script>
```

The Success result item is grouped with an HTML element as shown below:

```
<div id="Success"></div><script></script>
```

The Success element is optional and will be shown if all the Success checkboxes and no Error checkboxes are checked when the Validate button is clicked.

The Error result item is grouped with an HTML element as shown below:

```
<div id="Error"></div><script></script>
```

The Error element is optional and will be shown if not all the Success checkboxes or at least one Error checkboxes are checked when the Validate button is clicked.

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