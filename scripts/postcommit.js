const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./questions.js');
const tasks = require('./tasks.js');


let precommit = async () => {
  try {
    let y = await tasks.exec('ls', 'lister');
    let answer = await questions.yesNoQuestion('Do you use docker?');
  }
  catch (ex)
  {
    console.log(ex);
  }
}

precommit();

/*
let collect = async () => {
  let answer = await questions.yesNoQuestion("Would you like to dockerize?");
  console.log(answer);
}
collect();
*/
