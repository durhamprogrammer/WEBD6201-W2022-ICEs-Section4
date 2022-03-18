"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const hostname = 'localhost';
const port = 3000;
const server = http_1.default.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map