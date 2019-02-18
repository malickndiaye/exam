'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProgramsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modules: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Module',
            select: true
        }
    ],
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
ProgramsSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    next();
});
exports.default = mongoose_1.model('Programs', ProgramsSchema);
//# sourceMappingURL=programs.model.js.map