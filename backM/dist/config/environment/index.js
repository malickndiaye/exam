'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint no-process-env:0*/
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
const commander_1 = __importDefault(require("commander"));
/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/
/**
 * Read args from program
 */
function processArgs() {
    commander_1.default
        .option('-d, --debug', 'Start in debug mode')
        .parse(process.argv);
    return {
        debug: commander_1.default.debug
    };
}
// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,
    // Root path of server
    root: path_1.default.normalize(`${__dirname}/../../..`),
    // dev client port
    clientPort: process.env.CLIENT_PORT || 3000,
    // Server port
    port: process.env.PORT || 9000,
    // Server IP
    ip: process.env.IP || '0.0.0.0',
    // Should we populate the DB with sample data?
    seedDB: false,
    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'edacy-webapp-secret'
    },
    // MongoDB connection options
    mongo: {
        options: {
            server: {
                useMongoClient: true,
                autoReconnect: true,
                reconnectTries: Number.MAX_VALUE,
                reconnectInterval: 1000,
                poolSize: 10,
                db: {
                    safe: true
                }
            }
        }
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID || '195547841045621',
        clientSecret: process.env.FACEBOOK_SECRET || '20fdf79cbedc0817290b5f8dd58589a8',
        callbackURL: `${process.env.DOMAIN || ''}/auth/facebook/callback`
    },
    linkedin: {
        clientID: process.env.clientID || '86jldtel44u0wv',
        clientSecret: process.env.clientSecret || 'pNqXaTttMwJvWfAQ',
        callbackURL: `${process.env.DOMAIN || ''}/auth/linkedin/callback`
    },
    google: {
        clientID: process.env.clientID || '939092919998-4v9u4pf5grb2jsanj3j1aufc7fnptp5t.apps.googleusercontent.com',
        clientSecret: process.env.clientSecret || 'i4rzBOy6WooncInwroAnFaVm',
        callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
    }
};
// Export the config object based on the NODE_ENV
// ==============================================
exports.default = lodash_1.default.merge(all, require('./shared').default, require(`./${process.env.NODE_ENV || 'development'}.ts`) || {}, processArgs());
//# sourceMappingURL=index.js.map