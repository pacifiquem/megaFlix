import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { loginDTO, newUserDTO } from './dtos/user.dto';
import { HttpService } from '@nestjs/axios/dist';
import hash from './utils/hasher.util';
import jwtFunctions from './utils/jwt_token_generator.util';

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

  async getUserbyEmail(email: string) {
    const user = await this.UserModel.findOne({
      email,
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
  }
}
