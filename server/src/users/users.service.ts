import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { newUserDTO } from './dtos/user.dto';
import { HttpService } from '@nestjs/axios/dist';
import { catchError, map } from 'rxjs';

@Injectable()
export class UsersService {
  private response: unknown;
  constructor(
    @InjectModel('User') private readonly UserModel: Model<newUserDTO>,
    private readonly http: HttpService,
  ) {}

  async addnewuser(usersCredentials: newUserDTO) {
    await this.http
      .get('https://geolocation-db.com/json/')
      .pipe(
        map(
          (res) => (usersCredentials.Country = res.data?.country_name || null),
        ),
      );
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
  }
}
