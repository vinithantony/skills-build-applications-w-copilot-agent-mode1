"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../config/api");
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const team_1 = __importDefault(require("../models/team"));
const user_1 = __importDefault(require("../models/user"));
const workout_1 = __importDefault(require("../models/workout"));
const router = express_1.default.Router();
router.get('/api/users', async (_req, res) => {
    const users = await user_1.default.find({}).lean();
    res.json({
        message: 'Users endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        users
    });
});
router.get('/api/users/', async (_req, res) => {
    const users = await user_1.default.find({}).lean();
    res.json({
        message: 'Users endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        users
    });
});
router.get('/api/teams', async (_req, res) => {
    const teams = await team_1.default.find({}).lean();
    res.json({
        message: 'Teams endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        teams
    });
});
router.get('/api/teams/', async (_req, res) => {
    const teams = await team_1.default.find({}).lean();
    res.json({
        message: 'Teams endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        teams
    });
});
router.get('/api/activities', async (_req, res) => {
    const activities = await activity_1.default.find({}).lean();
    res.json({
        message: 'Activities endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        activities
    });
});
router.get('/api/activities/', async (_req, res) => {
    const activities = await activity_1.default.find({}).lean();
    res.json({
        message: 'Activities endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        activities
    });
});
router.get('/api/leaderboard', async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({}).lean();
    res.json({
        message: 'Leaderboard endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        leaderboard
    });
});
router.get('/api/leaderboard/', async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({}).lean();
    res.json({
        message: 'Leaderboard endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        leaderboard
    });
});
router.get('/api/workouts', async (_req, res) => {
    const workouts = await workout_1.default.find({}).lean();
    res.json({
        message: 'Workouts endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        workouts
    });
});
router.get('/api/workouts/', async (_req, res) => {
    const workouts = await workout_1.default.find({}).lean();
    res.json({
        message: 'Workouts endpoint',
        apiBaseUrl: (0, api_1.getApiBaseUrl)(),
        workouts
    });
});
exports.default = router;
