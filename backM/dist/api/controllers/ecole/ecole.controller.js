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
const ecole_service_1 = __importDefault(require("./ecole.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class EcoleController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    createEcole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let ecole = {
                name: req.body.name,
                description: req.body.description,
            };
            try {
                let _partner = yield ecole_service_1.default.createEcole(ecole);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a partner', 'Error occurred when trying to subscribe as a partner', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one partner
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneEcole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one partner without id', 'idPartner is required');
            }
            try {
                let partner = yield ecole_service_1.default.getOneEcole(req.params.id);
                if (!partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this partner', 'Error occurred when trying to get this partner', 500);
                }
                res.json(partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    getAllEcoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ecoles = yield ecole_service_1.default.getAllEcole();
                res.json(ecoles);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new EcoleController();
//# sourceMappingURL=ecole.controller.js.map