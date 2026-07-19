import { Schema, model, type Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userName: string;
  score: number;
  streak: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userName: { type: String, required: true, unique: true },
  score: { type: Number, required: true },
  streak: { type: Number, required: true },
  rank: { type: Number, required: true }
}, {
  timestamps: true
});

export const Leaderboard = model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
export default Leaderboard;
