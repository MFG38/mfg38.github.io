#!/usr/bin/env bash

rm mfg38_fullmidiography.zip
7za a -tzip mfg38_fullmidiography.zip * -x!rebuildzip.sh
