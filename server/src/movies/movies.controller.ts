/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Query, Param, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';


@Controller('movies')

export class MoviesController {

    @Get()
    async finAll(@Req() req:Request, @Res() res:Response) {
        res.json({
            success: true,
            message: 'here you can get'
        });;
    }

    @Post() 
    async addNewMovie(@Req() req:Request, @Res() res:Response) {
        res.json({
            success: true,
            message: 'here you can create'
        });
    }

    @Delete() 
    async deleteMovie(@Req() req:Request, @Res() res:Response) {
        res.json({
            success: true,
            message: 'here you can delete'
        });
    }

    @Put()
    async updateMovie(@Req() req:Request, @Res() res:Response) {
        res.json({
            success: true,
            message: 'here you can update'
        });
    }

}
