'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["video", "pdf", "website", "pysical"],
        default: "video"
    },
    link: {
        type: String,
        required: true
    }
});
/**
 *  hooks methods
 */
CourseSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    next();
});
exports.default = mongoose_1.model('Course', CourseSchema);
//# sourceMappingURL=course.model.js.map