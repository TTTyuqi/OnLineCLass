import { UserModel } from '@app/db/model/user.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[TypegooseModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
