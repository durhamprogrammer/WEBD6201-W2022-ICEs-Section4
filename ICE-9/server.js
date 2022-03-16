import { sayHello, sayGoodbye } from "./hello.js";
import { getData } from "./users.data.js";

getData()
  .then((data) => {
    sayHello();
    console.log(data);
    sayGoodbye();
  })
  .catch((err) => {
    console.error("ERROR: User Data Failed to Load: " + err.message);
  });
