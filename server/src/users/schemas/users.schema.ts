/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    maxLength: 20,
    minLength: 4,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
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
