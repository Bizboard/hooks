var prompt = require('prompt');
var colors = require('colors/safe');
const shell = require('shelljs');

prompt.message = '';
prompt.delimiter = colors.green('>');
prompt.start();

function runShellTask(task, label = 'task') {
  return new Promise((resolve, reject) => {

    shell.echo('-n', `${colors.white.bold('Running ' + label + '.... ')}`);

    let result = shell.exec(task, {silent: true}, function(code, stdout, stderr) {
      if (code!==0) {
        shell.echo(`${colors.red.bold('ERROR')}\r`);
        reject(stdout);
      }
      else {
        shell.echo('', `${colors.green.bold('OK')}\r`);
        resolve(stdout);
      }
    });
  });
}

module.exports = {
  exec: runShellTask
}
