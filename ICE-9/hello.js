const helloMessage = "Hello, World!";
const goodbyeMessage = "Good Bye!";

function sayHello()
{
    console.log(helloMessage);
}

function sayGoodbye()
{
    console.log(goodbyeMessage);
}

module.exports = {
    sayHello,
    sayGoodbye
}