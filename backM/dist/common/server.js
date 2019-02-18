"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = require('bluebird');
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const os_1 = __importDefault(require("os"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_1 = __importDefault(require("./swagger"));
const logger_1 = __importDefault(require("./logger"));
// Connect to MongoDB
mongoose_1.default.connect('mongodb://Thening:reussites99@ds149754.mlab.com:49754/inscriptiondb', {});
mongoose_1.default.connection.on('error', function (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1); // eslint-disable-line no-process-exit
});
// Populate databases with sample data
const app = express_1.default();
//config express
//expressConfig(app);
class ExpressServer {
    constructor() {
        const root = path_1.default.normalize(__dirname + '/../..');
        app.set('appPath', root + '/client');
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(cookie_parser_1.default(process.env.SESSION_SECRET));
        app.use(express_1.default.static(`${root}/public`));
        // acces control allow origin
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            next();
        });
    }
    router(routes) {
        swagger_1.default(app, routes);
        return this;
    }
    listen(p = process.env.PORT || '8080') {
        const welcome = port => () => logger_1.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os_1.default.hostname()} on port: ${port}}`);
        http_1.default.createServer(app).listen(p, welcome(p));
        return app;
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=server.js.map