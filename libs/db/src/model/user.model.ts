/**
 * 创建User对象
 */

import { ApiProperty } from "@nestjs/swagger";
import { Prop } from "@typegoose/typegoose";

 export class UserModel{

    @ApiProperty()
    @Prop()
    userName:string

    @ApiProperty()
    @Prop()
    userPassWorld:string
 }