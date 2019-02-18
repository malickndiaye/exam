'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EtudiantSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now(),
        required: true,
        select: false
    },
    update: {
        type: Date,
        select: false
    }
});
/**
 *  hooks methods
 */
EtudiantSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    this.update({ 'updated': Date.now() });
    next();
});
exports.default = mongoose_1.model('Etudiant', EtudiantSchema);
//# sourceMappingURL=etudiant.model.js.map