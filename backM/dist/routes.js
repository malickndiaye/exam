"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import errors from './components/errors';
const path_1 = __importDefault(require("path"));
const inscription_1 = __importDefault(require("./api/controllers/inscription"));
//const url = config.url;
const url = '/api/v1';
function routes(app) {
    app.use('/api/v1/inscriptions', inscription_1.default.publicRouter);
    app.use('/api/v1/admin', inscription_1.default.privateRouter);
    // All undefined asset or api routes should return a 404
    //app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);
    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
        res.sendFile(path_1.default.resolve(`${app.get('appPath')}/index.html`));
    });
}
exports.default = routes;
;
//# sourceMappingURL=routes.js.map