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
const course_service_1 = __importDefault(require("./course.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class CourseController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let course = {
                nom: req.body.nom,
                description: req.body.description,
                type: req.body.type,
                link: req.body.link,
            };
            try {
                let _course = yield course_service_1.default.CreateCourse(course);
                if (!_course) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a course', 'Error occurred when trying to subscribe as a course', 500);
                }
                res.json(_course);
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
    getAllCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let courses = yield course_service_1.default.getAllCourse();
                res.json(courses);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one course
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one course without id', 'idPartner is required');
            }
            try {
                let course = yield course_service_1.default.getOneCourse(req.params.id);
                if (!course) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this course', 'Error occurred when trying to get this course', 500);
                }
                res.json(course);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new CourseController();
//# sourceMappingURL=course.controller.js.map