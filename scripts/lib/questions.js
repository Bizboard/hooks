var prompt = require('prompt');
var colors = require('colors/safe');

prompt.message = '';
prompt.delimiter = colors.green('>');
prompt.start();

function getYesNoQuestion(q) {
  return new Promise((resolve, reject) => {
      prompt.get({
      properties: {
        answer: {
          description: colors.white.bold(q) + colors.green.bold(' (Y/n)')
        }
      }
    }, function (err, result) {
      if (err) reject(err);
      else {
        if (result.answer.toLowerCase() == 'y') {
          resolve(true);
        }
        else if (result.answer.toLowerCase() == 'n') {
          resolve(false);
        }
        else {
          reject('Invalid response');
        }
      }
    });
  });
}

module.exports = {
  yesNoQuestion: getYesNoQuestion
}
