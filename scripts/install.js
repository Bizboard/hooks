const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./lib/questions.js');
const tasks = require('./lib/tasks.js');

async function install() {
  let appPackage = JSON.parse(fs.readFileSync(projectPackageUri, 'utf8'));
  if (appPackage.name==="hooks")return;

  try {
    let docker = await questions.yesNoQuestion("Is this a project with Dockerfile?");
    if (docker) {
      shell.cp(path.join(__dirname, './files/.dockerignore'), path.join(process.env.INIT_CWD, '.dockerignore'));
    }

    shell.cat(path.join(__dirname, './files/.gitignore')).to(path.join(process.env.INIT_CWD, '.eslintrc'));
    shell.cp(path.join(__dirname, './files/.eslintrc'), path.join(process.env.INIT_CWD, '.eslintrc'));

    shell.mkdir('-p', path.join(process.env.INIT_CWD, '.bizboard'));

    let projectPackageUri = path.join(process.env.INIT_CWD, './package.json');
    if (!appPackage["husky"]) {
      appPackage["husky"] = {
        "hooks": {
          "pre-commit": "./node_modules/hooks/precommit.sh",
          "post-commit": "./node_modules/hooks/postcommit.sh"
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

install();
