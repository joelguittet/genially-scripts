# quizDragDropResult

The purpose of this script is to display a result feedback (Success/Error) depending of the location where some items are drag and dropped. Optional Match items are displayed when an item is dropped closed to the right zone.

## Usage

The draggable item is grouped with an HTML element as shown below:

```
<div id="Ox"></div><script></script>
```

It is possible to define multiple draggable items with ID `Ox` where `x` is a number starting at 1.

The destination zones items are grouped with some HTML elements as shown below:

```
<div id="Zx"></div><script></script>
```

It is possible to define multiple destination zones with ID `Zx` where `x` is a number starting at 1.

The Match item is grouped with an HTML element as shown below:

```
<div id="Mx"></div><script></script>
```

It is possible to define multiple Match items with ID `Mx` where `x` is a number starting at 1. Match items `Mx` are associated to draggable items `Ox`.

The Match elements are optional and will be shown if the draggable item `Ox` is moved closed to `Zx`.

The Success result item is grouped with an HTML element as shown below:

```
<div id="resultSuccess"></div><script></script>
```

The Success element is optional and will be shown if all the draggable items are moved to the associated destination zones.

The Error result item is grouped with an HTML element as shown below:

```
<div id="resultError"></div><script></script>
```

The Error element is optional and will be shown if at least one draggable item is moved to the wrong destination zone.

Animations on the Match, Success and Error elements should be added in order to display the elements with a 0.5s delay when the page is loaded. This permit the script to initialize elements.

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
