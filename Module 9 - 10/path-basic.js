const path = require('path')

console.log('current file info:\n');
console.log('filename:',__filename);
console.log('Directory:',__dirname);

console.log("\n"+"-".repeat(40)+"\n");

const filePath = `C:/01.Next Level/01. Next level Practice/Mission 03/Module 9 - 10/next.js`

console.log('analyzing path', filePath,'\n');

console.log('Directory', path.dirname(filePath));
console.log('base name', path.basename(filePath));
console.log('file extension', path.extname(filePath));
console.log('file name', path.basename(filePath, path.extname(filePath)));

console.log("\n"+"-".repeat(40)+"\n");

const parsed = path.parse(filePath)

console.log('parsed path object:', parsed);

console.log('formatted path:', path.format(parsed));

