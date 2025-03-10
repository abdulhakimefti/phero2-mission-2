"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./modules/student/student.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(cors_1.default);
//application
app.use('/api/v2/students', student_route_1.StudentRoutes);
app.get('/', (req, res) => {
    res.send('Hello World');
});
exports.default = app;
