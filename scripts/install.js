const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const colors = require('colors');
const questions = require('./lib/questions.js');
const tasks = require('./lib/tasks.js');

async function install() {
  let projectRoot = process.env.INIT_CWD || process.cwd();
  let projectPackageUri = path.join(projectRoot, './package.json');
  let appPackage = JSON.parse(fs.readFileSync(projectPackageUri, 'utf8'));
  //if (appPackage.name==="hooks") return;

  try {
    let docker = await questions.yesNoQuestion("Is this a project with Dockerfile?");
    if (docker) {
      shell.cat(path.join(__dirname, '../files/.dockerignore')).to(path.join(projectRoot, '.dockerignore'));
    }

    let copyFiles = await questions.yesNoQuestion("Is this an empty project?");
    if (copyFiles) {
      //shell.cat(path.join(__dirname, '../files/.gitignore')).to(path.join(projectRoot, '.gitignore'));
      shell.cp(path.join(__dirname, '../files/.eslintrc'), path.join(projectRoot, '.eslintrc'));
      shell.mkdir('-p', path.join(projectRoot, '.bizboard'));
    }

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
