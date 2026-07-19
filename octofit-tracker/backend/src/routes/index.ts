import express from 'express';
import { getApiBaseUrl } from '../config/api';
import Activity from '../models/activity';
import Leaderboard from '../models/leaderboard';
import Team from '../models/team';
import User from '../models/user';
import Workout from '../models/workout';

const router = express.Router();

router.get('/api/users', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({
    message: 'Users endpoint',
    apiBaseUrl: getApiBaseUrl(),
    users
  });
});

router.get('/api/users/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({
    message: 'Users endpoint',
    apiBaseUrl: getApiBaseUrl(),
    users
  });
});

router.get('/api/teams', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json({
    message: 'Teams endpoint',
    apiBaseUrl: getApiBaseUrl(),
    teams
  });
});

router.get('/api/teams/', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json({
    message: 'Teams endpoint',
    apiBaseUrl: getApiBaseUrl(),
    teams
  });
});

router.get('/api/activities', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json({
    message: 'Activities endpoint',
    apiBaseUrl: getApiBaseUrl(),
    activities
  });
});

router.get('/api/activities/', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json({
    message: 'Activities endpoint',
    apiBaseUrl: getApiBaseUrl(),
    activities
  });
});

router.get('/api/leaderboard', async (_req, res) => {
  const leaderboard = await Leaderboard.find({}).lean();
  res.json({
    message: 'Leaderboard endpoint',
    apiBaseUrl: getApiBaseUrl(),
    leaderboard
  });
});

router.get('/api/leaderboard/', async (_req, res) => {
  const leaderboard = await Leaderboard.find({}).lean();
  res.json({
    message: 'Leaderboard endpoint',
    apiBaseUrl: getApiBaseUrl(),
    leaderboard
  });
});

router.get('/api/workouts', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({
    message: 'Workouts endpoint',
    apiBaseUrl: getApiBaseUrl(),
    workouts
  });
});

router.get('/api/workouts/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({
    message: 'Workouts endpoint',
    apiBaseUrl: getApiBaseUrl(),
    workouts
  });
});

export default router;
