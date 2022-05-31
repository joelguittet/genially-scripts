# quizDragDropResult

The purpose of this script is to display a result feedback (Success/Error) depending of the location where an item is drag and dropped.

## Usage

The draggable item is grouped with an HTML element as shown below:

```
<div id="O1"></div><script></script>
```

The destination zones items are grouped with some HTML elements as shown below:

```
<div id="Zx"></div><script></script>
```

It is possible to define multiple destination zones with ID `Zx` where `x` is a number starting at 1.

The success result item is grouped with an HTML elements as shown below:

```
<div id="Success"></div><script></script>
```

The Success element is optional and will be shown if the draggable item is moved to Z1.

The error result item is grouped with an HTML elements as shown below:

```
<div id="Error"></div><script></script>
```

The Error element is optional and will be shown if the draggable item is moved to Zx (x>1).

The script is inserted in the presentation using an HTML element as shown below:

```
<div id="quizDragDropResult">quizDragDropResult</div><script>
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    eval(request.responseText);
  }
};
request.open('GET', 'https://raw.githubusercontent.com/joelguittet/genially-scripts/master/min/quizDragDropResult.js', true);
request.send(null);
</script>
```
