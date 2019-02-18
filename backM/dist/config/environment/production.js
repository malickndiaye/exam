'use strict';
/*eslint no-process-env:0*/
// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP
        || process.env.ip
        || undefined,
    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT
        || process.env.PORT
        || 8080,
    // MongoDB connection options
    mongo: {
        uri: process.env.MONGODB_URI
            || process.env.MONGOHQ_URL
            || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
            || 'mongodb://localhost/edacywebapp'
    },
    URL_SENDGRID: 'https://api.sendgrid.com/v3/mail/send',
    SENDGRID_API_KEY: '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',
    EDACY_EMAIL: 'admin@edacy.com',
    CLIENT_DOMAINE: process.env.CLIENT_DOMAINE,
    JWT_SECRET: 'EDACY',
    JWT_EXPIRES_IN: `${60 * 60 * 5}`,
    DEFAULT_PASSWORD: 'Edacy@aspirefarther.inc',
};
//# sourceMappingURL=production.js.map