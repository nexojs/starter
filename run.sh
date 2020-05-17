#!/bin/bash

deno run --allow-read=. --allow-write=. --allow-net --unstable --importmap import_map.json -c=tsconfig.json $1 index.ts