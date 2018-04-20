const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./lib/questions.js');
const tasks = require('./lib/tasks.js');


async function precommit() {
  try {
    let y = await tasks.exec('eslint .', 'eslint');
  }
  catch (ex)
  {
    console.log(ex);
    process.exit(1);
  }
}

precommit();
