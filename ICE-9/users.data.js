const fs = require('fs');
const fsPromises = fs.promises; // alias

module.exports = {
    getData: async function()
    {
        return await fsPromises.readFile("./Data/users.json", "utf8", function(err, data)
        {
           return data;
        });
    } 
}


