#!/bin/sh
# pre-commit
# Bizboard Development Workflow
if ! type "eslint" > /dev/null; then
  # install foobar here
  echo "please install eslint"
else
  eslint .
fi
