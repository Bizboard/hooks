#!/bin/sh
# Bizboard Development Workflow
if ! type "eslint" > /dev/null; then
  echo "installing eslint"
  sudo npm install -g eslint
fi

sudo npm install babel-eslint -g
