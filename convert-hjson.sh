#!/bin/sh
for i in $(find ./src/assets/ -name "*.hjson" -type f); 
do 
    f="${i%.hjson}"; npm run --silent hjson -- -j $i > "${f}.json"
    echo "converting ${i} -> ${f}.json"
done
