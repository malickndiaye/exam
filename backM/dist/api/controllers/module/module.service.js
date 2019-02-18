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
const module_model_1 = __importDefault(require("./module.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const ModuleRepository = new generic_repository_1.default(module_model_1.default);
class ModuleService {
    /**
     * save a new instance of module
     * @param module
     * @returns {Promise.<*>}
     */
    createModule(module) {
        return __awaiter(this, void 0, void 0, function* () {
            let _module = null;
            try {
                _module = yield ModuleRepository.save(module);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this module', 500);
            }
            return _module;
        });
    }
    ;
    getAllModule() {
        return __awaiter(this, void 0, void 0, function* () {
            let modules = [];
            try {
                modules = yield ModuleRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all modules', 500);
            }
            return modules;
        });
    }
    ;
    /**
     * Get one module
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneModule(idPartner) {
        return __awaiter(this, void 0, void 0, function* () {
            let module = null;
            try {
                module = yield ModuleRepository.getOne(idPartner);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this module', 500);
            }
            return module;
        });
    }
    ;
}
exports.ModuleService = ModuleService;
;
exports.default = new ModuleService();
//# sourceMappingURL=module.service.js.map