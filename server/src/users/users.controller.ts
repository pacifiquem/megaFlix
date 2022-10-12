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
import { Request, Response } from 'express';
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
  async getMe() {
    return 'a';
  }

  @Post()
  async login(@Body() usersCredentials: loginDTO) {
    console.log(usersCredentials);
  }
}
