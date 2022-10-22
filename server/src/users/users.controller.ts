import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Req,
  Res,
  Body,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UsersService } from './users.service';
import {
  newUserDTO,
  loginDTO,
  getResetPasswordToken,
  updatePassword,
  updatePasswordParams,
  getUserbyEmailDTO,
} from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersServices: UsersService) {}

  @Post('/signup')
  async newUser(
    @Body() usersCredentials: newUserDTO,
    @Res() response: Response,
  ) {
    const usersServiceResponse: any = await this.UsersServices.addnewuser(
      usersCredentials,
    );
    response.status(usersServiceResponse.status).json({
      usersServiceResponse,
    });
  }

  @Post('/login')
  async login(@Body() usersCredentials: loginDTO, @Res() response: Response) {
    const token = await this.UsersServices.login(usersCredentials);
    response.cookie('token', token.data);

    response.json({
      success: true,
      data: token,
    });
  }

  @Get('/issignedup')
  async isSignedUp(@Body() usersCredentials: getUserbyEmailDTO) {
    return this.UsersServices.getUserbyEmail(usersCredentials);
  }

  @Get('/reset/password/gettoken')
  async getResetPasswordToken(@Body() usersCredentials: getResetPasswordToken) {
    return this.UsersServices.getPasswordtoken(usersCredentials.email);
  }

  @Put('/reset/password/token/:token')
  async updatePassword(
    @Body() reqBody: updatePassword,
    @Param() token: updatePasswordParams,
  ) {
    reqBody.token = token.token;
    return this.UsersServices.updatePassword(reqBody);
  }
}
