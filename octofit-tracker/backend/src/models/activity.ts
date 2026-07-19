import { Schema, model, type Document } from 'mongoose';

export interface IActivity extends Document {
  userName: string;
  type: string;
  durationMinutes: number;
  calories: number;
  date: Date;
}

const activitySchema = new Schema<IActivity>({
  userName: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true
});

export const Activity = model<IActivity>('Activity', activitySchema);
export default Activity;
