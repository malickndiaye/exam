"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const module_controller_1 = __importDefault(require("./module.controller"));
let publicRouter = express_1.default.Router()
    .get('/', module_controller_1.default.getAllModule)
    .get('/:id', module_controller_1.default.getOneModule)
    .post('/', module_controller_1.default.subscribe);
let privateRouter = express_1.default.Router();
let value = { publicRouter: publicRouter, privateRouter: privateRouter };
exports.default = value;
//# sourceMappingURL=index.js.map