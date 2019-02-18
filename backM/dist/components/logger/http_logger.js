'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_http_1 = __importDefault(require("pino-http"));
const _1 = __importDefault(require("."));
/**
 * Serializer of request
 * @param {Request} req
 */
function reqValue(req) {
    let _req;
    _req.id = typeof req.id === 'function' ? req.id() : req.id;
    _req.method = req.method;
    _req.url = req.url;
    _req.headers = req.headers;
    _req.body = req.raw.body;
    _req.params = req.raw.params;
    _req.query = req.raw.query;
    _req.remoteAddress = req.remoteAddress;
    _req.remotePort = req.remotePort;
    return _req;
}
/**
 * Serializer of response
 * @param {Response} res
 */
function resValue(res) {
    let _res;
    _res.statusCode = res.statusCode;
    _res.header = res.header;
    return _res;
}
exports.default = pino_http_1.default({
    logger: _1.default,
    serializers: {
        req: reqValue,
        res: resValue
    }
});
//# sourceMappingURL=http_logger.js.map