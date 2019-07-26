#!/usr/bin/env bash

protoc \
    -I:. \
    --go_out=plugins=grpc:./go \
    --plugin=protoc-gen-ts=./ts/node_modules/.bin/protoc-gen-ts \
    --ts_out=service=true:./ts \
    --js_out=import_style=commonjs,binary:./ts \
    ./grpc-form.proto
