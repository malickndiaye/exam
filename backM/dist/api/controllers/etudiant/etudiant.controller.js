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
const Etudiant_service_1 = __importDefault(require("./Etudiant.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class EtudiantController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let etudiant = {
                nom: req.body.nom,
                prenom: req.body.prenom,
                adresse: req.body.adresse,
                telephone: req.body.telephone,
            };
            try {
                let _etudiant = yield Etudiant_service_1.default.CreateEtudiant(etudiant);
                if (!_etudiant) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a etudiant', 'Error occurred when trying to subscribe as a etudiant', 500);
                }
                res.json(_etudiant);
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
    getAllEtudiant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let etudiants = yield Etudiant_service_1.default.getAllEtudiant();
                res.json(etudiants);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one etudiant
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneEtudiant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one etudiant without id', 'idPartner is required');
            }
            try {
                let etudiant = yield Etudiant_service_1.default.getOneEtudiant(req.params.id);
                if (!etudiant) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this etudiant', 'Error occurred when trying to get this etudiant', 500);
                }
                res.json(etudiant);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new EtudiantController();
//# sourceMappingURL=etudiant.controller.js.map