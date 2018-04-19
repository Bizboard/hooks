const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./.bizboard/questions.js');

async function install() {

  try {
    let docker = await questions.yesNoQuestion("Would you like to dockerize?");
    shell.cp(path.join(__dirname, './files/.eslintrc'), path.join(process.env.INIT_CWD, '.eslintrc'));


    let projectPackageUri = path.join(process.env.INIT_CWD, './package.json');
    let appPackage = JSON.parse(fs.readFileSync(projectPackageUri, 'utf8'));
    if (!appPackage["husky"]) {
      appPackage["husky"] = {
        "hooks": {
          "pre-commit": "./node_modules/hooks/precommit.sh",

        }
      };
    }
    let content = JSON.stringify(appPackage, null, 2);
    fs.writeFileSync(projectPackageUri, content);


  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    // eslint-disable-next-line no-console
    console.error('Not able to read application package.');
    process.exit();
  }
}
