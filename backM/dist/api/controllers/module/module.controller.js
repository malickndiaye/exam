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
const course_service_1 = __importDefault(require("../course/course.service"));
const module_service_1 = __importDefault(require("./module.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class ModuleController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let module = {
                name: req.body.name,
                description: req.body.description,
                course: req.body.course
            };
            let course_list_object;
            module.course.array.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                const rest = yield course_service_1.default.getOneCourse(element);
                course_list_object.push(rest);
            }));
            module.course = yield course_service_1.default.getOneCourse(module.course);
            if (module.course == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "course not found");
            }
            try {
                let _partner = yield module_service_1.default.createModule(module);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a module', 'Error occurred when trying to subscribe as a module', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one module
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneModule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one module without id', 'idPartner is required');
            }
            try {
                let module = yield module_service_1.default.getOneModule(req.params.id);
                if (!module) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this module', 'Error occurred when trying to get this module', 500);
                }
                res.json(module);
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
    getAllModule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let partners = yield module_service_1.default.getAllModule();
                res.json(partners);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new ModuleController();
//# sourceMappingURL=module.controller.js.map