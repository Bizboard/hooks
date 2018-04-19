#!/bin/sh
# pre-commit
# Bizboard Development Workflow
if ! type "eslint" > /dev/null; then
  echo "installing eslint"
  sudo npm install -g eslint
  sudo npm install babel-eslint -g
fi

if ! type "gulp" > /dev/null; then
  echo "installing gulp"
  sudo npm install -g gulp-cli
fi
