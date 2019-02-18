'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EcoleSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        select: false,
        required: true,
        default: Date.now()
    },
    updated: {
        type: Date,
        select: false
    }
});
/**
 *  hooks methods
 */
EcoleSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    next();
});
exports.default = mongoose_1.model('Ecole', EcoleSchema);
//# sourceMappingURL=ecole.model.js.map