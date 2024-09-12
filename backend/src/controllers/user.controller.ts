import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from '../Services/user.service';
import { User } from '../Interfaces/user.interface';

@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}
}