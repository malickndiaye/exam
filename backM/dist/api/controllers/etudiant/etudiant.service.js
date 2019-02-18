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
const etudiant_model_1 = __importDefault(require("./etudiant.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const EtudiantRepository = new generic_repository_1.default(etudiant_model_1.default);
class EtudiantService {
    /**
     * save a new instance of partner
     * @param partner
     * @returns {Promise.<*>}
     */
    CreateEtudiant(Etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            let _etudiant = null;
            try {
                _etudiant = yield EtudiantRepository.save(Etudiant);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this partner', 500);
            }
            return _etudiant;
        });
    }
    ;
    /**
     * Get all Ecolinscriptionse
     * @returns {Promise.<*>}
     */
    getAllEtudiant() {
        return __awaiter(this, void 0, void 0, function* () {
            let etudiants = [];
            try {
                etudiants = yield EtudiantRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all inscriptions', 500);
            }
            return etudiants;
        });
    }
    ;
    /**
     * Get one partner
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneEtudiant(idEtudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            let etudiant = null;
            try {
                etudiant = yield EtudiantRepository.getOne(idEtudiant);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return etudiant;
        });
    }
    ;
}
exports.EtudiantService = EtudiantService;
;
exports.default = new EtudiantService();
//# sourceMappingURL=etudiant.service.js.map