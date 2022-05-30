# genially-scripts

Scripts to be inserted in Genially presentations

## Usage

The scripts developed here are inserted in Genially presentations using an HTML element. The format of the element is the following:

```
<div id="scriptTobeUsed">scriptTobeUsed</div><script>
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    eval(request.responseText);
  }
};
request.open('GET', 'https://raw.githubusercontent.com/joelguittet/genially-scripts/master/min/scriptTobeUsed.js', true);
request.send(null);
</script>
```

Where `scriptTobeUsed` is a script from `min` directory, for example `quizDragDropResult`.

Most of the scripts are using additional HTML elements that are used to make interactions with the presentations. See corresponding READMEs in the `src` directory for some examples and additional instructions.

## Development

The scripts are developed in `src` directory. Library files are written in `lib` and available to the scripts in order to have common développement done for all scripts.

Scripts and libraries are concatenated and minified using `yui-compressor` tool and executing the following command:

```
./minify.sh
```
