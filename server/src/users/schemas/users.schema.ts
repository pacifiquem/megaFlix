/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    maxLength: 4,
    minLength: 20,
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

  Country: {
    type: String,
    required: false,
    unique: false
  },

  joinedAt: {
    type: Date,
    default: new Date()
  }

});