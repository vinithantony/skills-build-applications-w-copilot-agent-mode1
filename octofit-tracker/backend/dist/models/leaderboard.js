"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboard = void 0;
const mongoose_1 = require("mongoose");
const leaderboardSchema = new mongoose_1.Schema({
    userName: { type: String, required: true, unique: true },
    score: { type: Number, required: true },
    streak: { type: Number, required: true },
    rank: { type: Number, required: true }
}, {
    timestamps: true
});
exports.Leaderboard = (0, mongoose_1.model)('Leaderboard', leaderboardSchema);
exports.default = exports.Leaderboard;
