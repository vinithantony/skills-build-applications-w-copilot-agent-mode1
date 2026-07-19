import mongoose from 'mongoose';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Workout } from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      { name: 'Ava Chen', email: 'ava@example.com', role: 'Coach', fitnessGoal: 'Improve endurance' },
      { name: 'Leo Martinez', email: 'leo@example.com', role: 'Athlete', fitnessGoal: 'Build strength' },
      { name: 'Mina Patel', email: 'mina@example.com', role: 'Athlete', fitnessGoal: 'Increase mobility' }
    ]);

    await Team.insertMany([
      { name: 'North Star', city: 'Seattle', sport: 'CrossFit', members: users.slice(0, 2).map((user) => user.name) },
      { name: 'Peak Performers', city: 'Austin', sport: 'Triathlon', members: [users[2].name] }
    ]);

    await Activity.insertMany([
      { userName: users[0].name, type: 'Run', durationMinutes: 35, calories: 420, date: new Date('2026-07-15') },
      { userName: users[1].name, type: 'Strength', durationMinutes: 50, calories: 360, date: new Date('2026-07-16') },
      { userName: users[2].name, type: 'Yoga', durationMinutes: 30, calories: 180, date: new Date('2026-07-17') }
    ]);

    await Leaderboard.insertMany([
      { userName: users[0].name, score: 1250, streak: 8, rank: 1 },
      { userName: users[1].name, score: 1180, streak: 5, rank: 2 },
      { userName: users[2].name, score: 1100, streak: 4, rank: 3 }
    ]);

    await Workout.insertMany([
      { name: 'HIIT Cardio Blast', focus: 'Cardio', difficulty: 'Intermediate', durationMinutes: 30 },
      { name: 'Core Stability Flow', focus: 'Core', difficulty: 'Beginner', durationMinutes: 25 },
      { name: 'Power Strength Circuit', focus: 'Strength', difficulty: 'Advanced', durationMinutes: 45 }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
