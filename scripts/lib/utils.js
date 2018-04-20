const path = require('path');
const shell = require('shelljs');

function getProjectRoot(nextDir = null) {
  if (process.env.INIT_CWD) {
    console.log("using INIT_CWD", process.env.INIT_CWD);
    return process.env.INIT_CWD;
  }
  else {
    console.log("using resolve at", process.cwd());
    let cwd = nextDir || process.cwd();
    let parentRoot = path.join(cwd, '../');
    if (shell.ls(path.join(parentRoot, './package.json')).code==0) {
      return parentRoot;
    }
    else {
      return getProjectRoot(parentRoot);
    }
  }
}



module.exports = {
  cwd: getProjectRoot
}
