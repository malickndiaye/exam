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
const inscription_model_1 = __importDefault(require("./inscription.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const InscriptionRepository = new generic_repository_1.default(inscription_model_1.default);
class InscriptionService {
    /**
     * save a new instance of inscription
     * @param inscription
     * @returns {Promise.<*>}
     */
    createInscription(inscription) {
        return __awaiter(this, void 0, void 0, function* () {
            let _inscription = null;
            try {
                _inscription = yield InscriptionRepository.save(inscription);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this inscription', 500);
            }
            return _inscription;
        });
    }
    ;
    getAllInscription() {
        return __awaiter(this, void 0, void 0, function* () {
            let inscriptions = [];
            try {
                inscriptions = yield InscriptionRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all inscriptions', 500);
            }
            return inscriptions;
        });
    }
    ;
    /**
     * Get one inscription
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneInscription(idPartner) {
        return __awaiter(this, void 0, void 0, function* () {
            let inscription = null;
            try {
                inscription = yield InscriptionRepository.getOne(idPartner);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this inscription', 500);
            }
            return inscription;
        });
    }
    ;
}
exports.InscriptionService = InscriptionService;
;
exports.default = new InscriptionService();
//# sourceMappingURL=inscription.service.js.map