#!/bin/bash 

npx @svgr/cli --out-dir ./app/components/icons --expand-props none --template ./scripts/build-icons-template.ts --svg-props fill={color} --svg-props height={height} --svg-props width={width} --typescript ./assets/icons/*