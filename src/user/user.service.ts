import { UserModel } from '@app/db/model/user.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel:ReturnModelType<typeof UserModel>){}

    //查询所有用户
    async feachAll():Promise<UserModel[]>{
        let userlist = await this.userModel.find()
        return userlist
    }

    //创建一个用户
    async greateUser(userModel:UserModel):Promise<any>{
        await this.userModel.create(userModel)
        return '创建成功'
    }

}
