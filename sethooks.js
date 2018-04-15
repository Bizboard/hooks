const fs = require('fs');
const path = require('path');

try {

  fs.readdir('./files', function(err, items) {
    for (var i = 0; i < items.length; i++) {
      fs.createReadStream(items[i]).pipe(fs.createWriteStream(path.join(process.env.INIT_CWD, items[i])));
    }
  });


  let projectPackageUri = path.join(process.env.INIT_CWD, './package.json');
  console.log(projectPackageUri);
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