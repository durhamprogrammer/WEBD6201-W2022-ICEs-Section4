"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
let router = express_1.default.Router();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(router);
app.set('views', path_1.default.join(__dirname, "./Views"));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, "./Client")));
app.use(express_1.default.static(path_1.default.join(__dirname, "./node_modules")));
router.get("/", function (req, res, next) {
    res.render("index", { title: "Hello, World!" });
    next();
});
app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`);
});
//# sourceMappingURL=server.js.map