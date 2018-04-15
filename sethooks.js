const fs = require('fs');

try {
  let appPackage = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  if (!appPackage["husky"]) {
    appPackage["husky"] = {};
  }
  fs.writeFileSync('./package.json', JSON.stringify(appPackage));
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e);
  // eslint-disable-next-line no-console
  console.error('Not able to read application package.');
  process.exit();
}