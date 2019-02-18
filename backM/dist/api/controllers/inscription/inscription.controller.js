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
const ecole_service_1 = __importDefault(require("../ecole/ecole.service"));
const inscription_service_1 = __importDefault(require("./inscription.service"));
const etudiant_service_1 = __importDefault(require("../etudiant/etudiant.service"));
const programs_service_1 = __importDefault(require("../programs/programs.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class InscriptionController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let inscription = {
                ecole: req.body.ecole,
                programs: req.body.programs,
                etudiant: req.body.etudiant,
                montant: req.body.montant
            };
            inscription.ecole = yield ecole_service_1.default.getOneEcole(inscription.ecole);
            if (inscription.ecole == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "ecole not found");
            }
            inscription.etudiant = yield etudiant_service_1.default.getOneEtudiant(inscription.etudiant);
            if (inscription.etudiant == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "etudiant not found");
            }
            inscription.programs = yield programs_service_1.default.getOnePrograms(inscription.programs);
            if (inscription.ecole == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "ecole not found");
            }
            try {
                let _partner = yield inscription_service_1.default.createInscription(inscription);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a inscription', 'Error occurred when trying to subscribe as a inscription', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one inscription
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneInscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one inscription without id', 'idPartner is required');
            }
            try {
                let inscription = yield inscription_service_1.default.getOneInscription(req.params.id);
                if (!inscription) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this inscription', 'Error occurred when trying to get this inscription', 500);
                }
                res.json(inscription);
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
    getAllInscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let partners = yield inscription_service_1.default.getAllInscription();
                res.json(partners);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new InscriptionController();
//# sourceMappingURL=inscription.controller.js.map