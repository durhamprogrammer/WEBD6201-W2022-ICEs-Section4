const fs = require('fs');
const fsPromises = fs.promises; // alias

module.exports.getData = async () => await fsPromises.readFile("./Data/users.json", "utf8", (err, data) => data);