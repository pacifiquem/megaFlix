/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  
  password: {
    type: String,
    required: true,
    unique: false,
  },

  username: {
    type: String,
    required: true,
    unique: false,
    maxLength: [15, "too long username"],
    minLength: [3, "too short username"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  resetPasswordToken: {
    type: String,
    required: false,
    default: null,
  },

  joinedAt: {
    type: Date,
    default: new Date(),
  },
});
