import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  Body,
} from '@nestjs/common';
import { Request, response, Response } from 'express';
import { UsersService } from './users.service';
import { newUserDTO, loginDTO } from './dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersServices: UsersService) {}

  @Post()
  async newUser(@Body() usersCredentials: newUserDTO) {
    return this.UsersServices.addnewuser(usersCredentials);
  }

  @Get()
  async login(@Body() usersCredentials: loginDTO, @Res() response: Response) {
    const token = await this.UsersServices.login(usersCredentials);
    response.cookie('token', token.data);

    response.json({
      success: true,
      data: token,
    });
  }
}
