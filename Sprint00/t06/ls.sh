#!/bin/bash
ls -lh $1 | awk 'NF == 9 {print $9" "$5}'
