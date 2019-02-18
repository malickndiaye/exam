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
const ecole_model_1 = __importDefault(require("./ecole.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const EcoleRepository = new generic_repository_1.default(ecole_model_1.default);
class EcoleService {
    /**
     * save a new instance of partner
     * @param partner
     * @returns {Promise.<*>}
     */
    createEcole(ecole) {
        return __awaiter(this, void 0, void 0, function* () {
            let _ecole = null;
            try {
                _ecole = yield EcoleRepository.save(ecole);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this partner', 500);
            }
            return _ecole;
        });
    }
    ;
    /**
     * Get all Ecolinscriptionse
     * @returns {Promise.<*>}
     */
    getAllEcole() {
        return __awaiter(this, void 0, void 0, function* () {
            let ecoles = [];
            try {
                ecoles = yield EcoleRepository.getAll();
                console.log(ecoles.length);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all ecoles', 500);
            }
            return ecoles;
        });
    }
    ;
    /**
     * Get one partner
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneEcole(idecole) {
        return __awaiter(this, void 0, void 0, function* () {
            let ecole = null;
            try {
                ecole = yield EcoleRepository.getOne(idecole);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return ecole;
        });
    }
    ;
}
exports.EcoleService = EcoleService;
;
exports.default = new EcoleService();
//# sourceMappingURL=ecole.service.js.map