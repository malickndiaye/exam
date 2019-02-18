"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ecole_controller_1 = __importDefault(require("./ecole.controller"));
let publicRouter = express_1.default.Router()
    .get('/', ecole_controller_1.default.getAllEcoles)
    .get('/:id', ecole_controller_1.default.getOneEcole)
    .post('/', ecole_controller_1.default.createEcole);
let privateRouter = express_1.default.Router();
let value = { publicRouter: publicRouter, privateRouter: privateRouter };
exports.default = value;
//# sourceMappingURL=index.js.map