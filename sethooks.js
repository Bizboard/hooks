const fs = require('fs');
const path = require('path');

try {
  let projectPackageUri = path.join(process.cwd(), './package.json');
  let appPackage = JSON.parse(fs.readFileSync(projectPackageUri, 'utf8'));
  if (!appPackage["husky"]) {
    appPackage["husky"] = {};
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