const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./lib/questions.js');
const tasks = require('./lib/tasks.js');
const utils = require('./lib/utils.js');

async function preinstall() {
  let projectRoot = utils.getProjectRoot();
  
  if (!shell.which('eslint')) {
    await tasks.exec('sudo npm install -g eslint', 'eslint');
  }

  await tasks.exec('sudo npm install babel-eslint -g', 'babel-eslint');


}

preinstall();
