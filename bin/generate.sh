#!/bin/bash

SLIDES_ROOT=$(cd "$(dirname "$(readlink -f "$0")")/../"; pwd);


cd $SLIDES_ROOT;

node ./bin/generator.js ./doc/03-HTML5.md;
# node ./bin/generator.js ./doc/04-DOM.md;

