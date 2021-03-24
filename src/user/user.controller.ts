import { UserModel } from '@app/db/model/user.model';
import { Body, Controller, Get, Post, Query, UseFilters, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { ICrudQuery } from '@app/db/crud/ICrudQuery.model';


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @ApiOperation({summary:'获取用户'})
    @Get('/getAll')
    async findAllUser(@Query(new ParseIntPipe()) query:ICrudQuery):Promise<object>{
        return await this.userService.feachAll(query);

    }
    @ApiOperation({summary:'创建用户'})
    @Post()
    async createduser(@Body() user:UserModel):Promise<any>{
        // console.log('user',user)
        return await this.userService.greateUser(user);
    }
}
