const hello = require('./hello');
const users = require('./users.data');

users.getData()
.then((data) => { hello.sayHello(); console.log(data); hello.sayGoodbye(); })
.catch((err) => { console.error("ERROR: User Data Failed to Load: " + err.message); });