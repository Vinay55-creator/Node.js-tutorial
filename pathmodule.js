const path = require("node:path");

const a = path.basename("C:\\temp\\myfile.html");
console.log(a);

const a3 = path.extname(__filename);

console.log(a3);
