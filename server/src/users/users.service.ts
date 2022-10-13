import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  getUserbyEmailDTO,
  loginDTO,
  newUserDTO,
  updatePassword,
} from './dtos/user.dto';
import { HttpService } from '@nestjs/axios/dist';
import hash from './utils/hasher.util';
import jwtFunctions from './utils/jwt_token_generator.util';
import cryptoHasher from './utils/cryptoHasher.util';

@Injectable()
export class UsersService {
  private response: unknown;
  constructor(
    @InjectModel('User') private readonly UserModel: Model<newUserDTO>,
    private readonly http: HttpService,
  ) {}

  async addnewuser(usersCredentials: newUserDTO) {
    try {
      usersCredentials.password = await hash.hasher(usersCredentials.password);

      const newuser = await this.UserModel.create(usersCredentials);
      if (newuser) {
        this.response = {
          success: true,
          data: {
            username: newuser.username,
            email: newuser.email,
          },
        };

        return this.response;
      } else {
        this.response = {
          success: false,
          message: 'not inserted to db',
        };

        return this.response;
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async login(usersCredentials: loginDTO) {
    try {
      const loggedInUser = await this.UserModel.findOne({
        email: usersCredentials.email,
      });

      if (loggedInUser) {
        const doesPasswordMatch = await hash.comparer(
          usersCredentials.password,
          loggedInUser.password,
        );

        if (doesPasswordMatch) {
          const jwtToken = jwtFunctions.jwtTokenGenerator(loggedInUser);
          return {
            success: true,
            data: jwtToken,
          };
        } else {
          return {
            success: false,
            message: 'email or password is incorrect',
          };
        }
      } else {
        return {
          success: false,
          message: 'email or password is incorrect',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async getUserbyEmail(usersCredentials: getUserbyEmailDTO) {
    try {
      const user = await this.UserModel.findOne({
        email: usersCredentials.email,
      });

      if (user) {
        return {
          success: true,
          data: user.email,
        };
      } else {
        return {
          success: false,
          message: 'user not found',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async getPasswordtoken(usersCredentials: string) {
    try {
      const user = await this.UserModel.findOne({
        email: usersCredentials,
      });

      if (user) {
        const resetPasswordToken = await cryptoHasher.generateBuffer();
        user.resetPasswordToken = await cryptoHasher.encryptData(
          resetPasswordToken,
        );
        await user.save();
        return {
          success: true,
          data: resetPasswordToken,
        };
      } else {
        return {
          success: false,
          message: 'invalid email',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  async updatePassword(usersCredentials: updatePassword) {
    try {
      const resetPasswordToken = await cryptoHasher.encryptData(
        usersCredentials.token,
      );
      const user = await this.UserModel.findOne({
        resetPasswordToken,
      });

      if (user) {
        user.password = await hash.hasher(usersCredentials.password);
        user.resetPasswordToken = '';
        await user.save();

        return {
          success: true,
          data: {
            message: 'password updated',
            user: user.username,
          },
        };
      } else {
        return {
          success: false,
          message: 'user not found',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
