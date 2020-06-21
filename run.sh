#!/bin/bash

deno run --allow-read=. --allow-write=. --allow-net --unstable -c=tsconfig.json $1 index.ts