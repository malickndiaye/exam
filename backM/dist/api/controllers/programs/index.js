"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const programs_controller_1 = __importDefault(require("./programs.controller"));
let publicRouter = express_1.default.Router()
    .get('/', programs_controller_1.default.getAllPrograms)
    .get('/:id', programs_controller_1.default.getOnePrograms)
    .post('/', programs_controller_1.default.subscribe);
let privateRouter = express_1.default.Router();
let value = { publicRouter: publicRouter, privateRouter: privateRouter };
exports.default = value;
//# sourceMappingURL=index.js.map