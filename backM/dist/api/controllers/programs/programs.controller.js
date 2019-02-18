"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programs_service_1 = __importDefault(require("./programs.service"));
const module_service_1 = __importDefault(require("../module/module.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class ProgramsController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let programs = {
                name: req.body.name,
                description: req.body.description,
                modules: req.body.modules
            };
            programs.modules = yield module_service_1.default.getOneModule(programs.modules);
            if (programs.modules == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "modules not found");
            }
            try {
                let _partner = yield programs_service_1.default.createPrograms(programs);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a programs', 'Error occurred when trying to subscribe as a programs', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one programs
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOnePrograms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one programs without id', 'idPartner is required');
            }
            try {
                let programs = yield programs_service_1.default.getOnePrograms(req.params.id);
                if (!programs) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this programs', 'Error occurred when trying to get this programs', 500);
                }
                res.json(programs);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * get all partners
     * @param req
     * @param res
     * @returns {Promise.<void>}
     */
    getAllPrograms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let partners = yield programs_service_1.default.getAllPrograms();
                res.json(partners);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new ProgramsController();
//# sourceMappingURL=programs.controller.js.map