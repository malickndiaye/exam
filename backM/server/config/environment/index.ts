'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';
import program from 'commander';

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
  program
    .option('-d, --debug', 'Start in debug mode')
    .parse(process.argv);
  return {
    debug: program.debug
  };
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

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
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 1000, // Try each second
        poolSize: 10, // increase poolsize
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
export default _.merge(
  all,
  require('./shared').default,
  require(`./${process.env.NODE_ENV || 'development'}.ts`) || {},
  processArgs());
