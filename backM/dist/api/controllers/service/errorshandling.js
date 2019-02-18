"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../components/logger"));
class ErrorsHandlingService {
    //todo reviews call of this with right params
    handleError(res, statusCode, loggerMessage, clientMessage) {
        logger_1.default.error(loggerMessage);
        res.status(statusCode).json({
            message: clientMessage
        });
    }
    ;
    verifyModel(res, model) {
        let errors = model.validateSync();
        if (errors) {
            return this.handleError(res, 400, errors, 'Bad or missing parameters');
        }
    }
    ;
    throwError(serverError, clientMessage, messageCode) {
        logger_1.default.error(serverError);
        let err = new Error(clientMessage);
        err.code = messageCode;
        logger_1.default.error(err);
        throw err;
    }
    ;
}
;
exports.default = new ErrorsHandlingService();
//# sourceMappingURL=errorshandling.js.map