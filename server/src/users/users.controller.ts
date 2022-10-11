/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    @Post()
    async newUser(){
        return 'all is well';
    }
}
