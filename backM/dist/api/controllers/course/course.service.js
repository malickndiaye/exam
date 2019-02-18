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
const course_model_1 = __importDefault(require("./course.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const CourseRepository = new generic_repository_1.default(course_model_1.default);
class CourseService {
    /**
     * save a new instance of partner
     * @param partner
     * @returns {Promise.<*>}
     */
    CreateCourse(Course) {
        return __awaiter(this, void 0, void 0, function* () {
            let _course = null;
            try {
                _course = yield CourseRepository.save(Course);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this partner', 500);
            }
            return _course;
        });
    }
    ;
    /**
     * Get all Ecolinscriptionse
     * @returns {Promise.<*>}
     */
    getAllCourse() {
        return __awaiter(this, void 0, void 0, function* () {
            let course = [];
            try {
                course = yield CourseRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all inscriptions', 500);
            }
            return course;
        });
    }
    ;
    /**
     * Get one partner
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneCourse(idCourse) {
        return __awaiter(this, void 0, void 0, function* () {
            let Course = null;
            try {
                Course = yield CourseRepository.getOne(idCourse);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return Course;
        });
    }
    ;
}
exports.CourseService = CourseService;
;
exports.default = new CourseService();
//# sourceMappingURL=course.service.js.map