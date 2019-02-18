'use strict';
/*eslint no-process-env:0*/
// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/edacywebapp-dev'
    },
    // Seed database on startup
    seedDB: true,
    //linkedIn connexion
    LINKEDIN_SECRETE: process.env.LINKEDIN_SECRETE || '6Z1VTs5TaqbI9qWW',
    LINKEDIN_CLIENT: '78mbdzns58v55j',
    URL_SENDGRID: 'https://api.sendgrid.com/v3/mail/send',
    SENDGRID_API_KEY: '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',
    EDACY_EMAIL: 'admin@edacy.com',
    CLIENT_DOMAINE: 'http://localhost:3000',
    JWT_SECRET: 'EDACY',
    JWT_EXPIRES_IN: `${60 * 60 * 5}`,
    DEFAULT_PASSWORD: 'Edacy@aspirefarther.inc',
};
//# sourceMappingURL=development.js.map