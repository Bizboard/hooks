#!/bin/sh
# pre-commit
# Bizboard Development Workflow
if ! type "eslint" > /dev/null; then
  sudo npm install -g eslint
fi

eslint .
