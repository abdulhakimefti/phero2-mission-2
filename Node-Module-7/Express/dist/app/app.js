"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//middlewire
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
//Router 
const userRouter = express_1.default.Router();
app.use('/', userRouter);
userRouter.get('/app/v2/user/create', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Succed'
    });
});
app.get('/', logger, (req, res) => {
    res.send('Hello World!!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    // console.log('got data')
    // res.send('got data')
    res.json({
        message: 'succesfully'
    });
});
exports.default = app;
