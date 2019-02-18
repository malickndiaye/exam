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
const programs_model_1 = __importDefault(require("./programs.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const ProgramsRepository = new generic_repository_1.default(programs_model_1.default);
class ProgramsService {
    /**
     * save a new instance of programs
     * @param programs
     * @returns {Promise.<*>}
     */
    createPrograms(programs) {
        return __awaiter(this, void 0, void 0, function* () {
            let _programs = null;
            try {
                _programs = yield ProgramsRepository.save(programs);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this programs', 500);
            }
            return _programs;
        });
    }
    ;
    getAllPrograms() {
        return __awaiter(this, void 0, void 0, function* () {
            let programs = [];
            try {
                programs = yield ProgramsRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all programs', 500);
            }
            return programs;
        });
    }
    ;
    /**
     * Get one programs
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOnePrograms(idPartner) {
        return __awaiter(this, void 0, void 0, function* () {
            let programs = null;
            try {
                programs = yield ProgramsRepository.getOne(idPartner);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this programs', 500);
            }
            return programs;
        });
    }
    ;
}
exports.ProgramsService = ProgramsService;
;
exports.default = new ProgramsService();
//# sourceMappingURL=programs.service.js.map