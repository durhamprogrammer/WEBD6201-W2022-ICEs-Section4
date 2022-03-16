const hello = require('./hello');
const users = require('./users.data');

users.getData()
.then(function(data)
{
    hello.sayHello();
    console.log(data);
    hello.sayGoodbye();
})
.catch(function(err){
    console.error("ERROR: User Data Failed to Load");
});




