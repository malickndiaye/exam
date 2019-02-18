/**
 * Main application file
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = require('bluebird');
const environment_1 = __importDefault(require("./config/environment"));
const http_1 = __importDefault(require("http"));
const express_2 = __importDefault(require("./config/express"));
const routes_1 = __importDefault(require("./routes"));
// Connect to MongoDB
mongoose_1.default.connect(environment_1.default.mongo.uri, environment_1.default.mongo.options);
mongoose_1.default.connection.on('error', function (err) {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1); // eslint-disable-line no-process-exit
});
// Populate databases with sample data
if (environment_1.default.seedDB) {
    //require('./config/seed');
}
// Setup server
var app = express_1.default();
var server = http_1.default.createServer(app);
express_2.default(app);
routes_1.default(app);
// Start server
function startServer() {
    app.angularFullstack = server.listen(environment_1.default.port, environment_1.default.ip, function () {
        console.log('Express server listening on %d, in %s mode', environment_1.default.port, app.get('env'));
    });
}
setImmediate(startServer);
// Expose app
exports = module.exports = app;
//# sourceMappingURL=app.js.map