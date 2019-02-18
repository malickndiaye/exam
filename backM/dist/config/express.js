/**
 * Express configuration
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const method_override_1 = __importDefault(require("method-override"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const path_1 = __importDefault(require("path"));
const lusca_1 = __importDefault(require("lusca"));
const environment_1 = __importDefault(require("./environment"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_logger_1 = __importDefault(require("../components/logger/http_logger"));
var MongoStore = connect_mongo_1.default(express_session_1.default);
function default_1(app) {
    var env = app.get('env');
    if (env === 'development' || env === 'test') {
        app.use(express_1.default.static(path_1.default.join(environment_1.default.root, '.tmp')));
    }
    if (env === 'production') {
        app.use(serve_favicon_1.default(path_1.default.join(environment_1.default.root, 'client', 'favicon.ico')));
    }
    app.set('appPath', path_1.default.join(environment_1.default.root, 'client'));
    app.use(express_1.default.static(app.get('appPath')));
    /**
     * Upload directory
     */
    app.use(express_1.default.static(path_1.default.join(environment_1.default.root, 'uploads')));
    app.use(morgan_1.default('dev'));
    app.set('views', `${environment_1.default.root}/server/views`);
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression_1.default());
    app.use(body_parser_1.default.urlencoded({
        extended: false
    }));
    app.use(body_parser_1.default.json());
    app.use(method_override_1.default());
    app.use(cookie_parser_1.default());
    // HTTP Logger configs
    if (env === 'production') {
        app.use(http_logger_1.default);
    }
    app.use(passport_1.default.initialize());
    // acces control allow origin
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });
    // Persist sessions with MongoStore / sequelizeStore
    // We need to enable sessions for passport-twitter because it's an
    // oauth 1.0 strategy, and Lusca depends on sessions
    app.use(express_session_1.default({
        secret: environment_1.default.secrets.session,
        saveUninitialized: true,
        resave: false,
        store: new MongoStore({
            mongooseConnection: mongoose_1.default.connection,
            db: 'edacy-webapp'
        })
    }));
    /**
     * Lusca - express server security
     * https://github.com/krakenjs/lusca
     */
    if (env !== 'test' && env !== 'development' && !process.env.SAUCE_USERNAME) { // eslint-disable-line no-process-env
        app.use(lusca_1.default({
            csrf: false,
            xframe: 'SAMEORIGIN',
            hsts: {
                maxAge: 31536000,
                includeSubDomains: false,
                preload: false
            },
            xssProtection: false
        }));
    }
    if (env === 'development' || env === 'test') {
        app.use(errorhandler_1.default()); // Error handler - has to be last
    }
}
exports.default = default_1;
//# sourceMappingURL=express.js.map