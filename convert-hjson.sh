#!/bin/sh
for i in $(find ./src/assets/ -name "*.hjson" -type f); 
do 
    f="${i%.hjson}"; ./hjson-cli -j $i > "${f}.json"
    echo "converting ${i}  -> ${f}"
done
