/**
 * 创建User对象
 */

import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, Prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions:{
    timestamps:true
  }
})
 export class UserModel{
    @ApiProperty()
    @Prop({required:true})
    userName:string

    @ApiProperty()
    @Prop({required:true})
    userPassWorld:string
 }