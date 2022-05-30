#/bin/bash

# Parse all source files
for s in src/*.js; do

  # Create temporary destination file
  touch /tmp/script.js
  
  # Concatenate all library files in the temporary destination file
  for l in lib/*.js; do
    cat $l >> /tmp/script.js
  done;
  
  # Concatenate source file at the end of the temporary destination file
  cat $s >> /tmp/script.js
  
  # Minify the file
  yui-compressor /tmp/script.js > min/$(basename $s)
  
  # Delete temporary destination file
  rm /tmp/script.js

done;
