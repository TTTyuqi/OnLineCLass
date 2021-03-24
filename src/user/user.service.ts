import { UserModel } from '@app/db/model/user.model';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel:ReturnModelType<typeof UserModel>){}

    //查询所有用户
    async feachAll(query):Promise<object>{
        console.log("query",query)
        let total = await  this.userModel.find().countDocuments()
        let lastPage = Math.ceil(total/query.size)
        let data = await this.userModel.find(query.where).limit(query.size).sort(query.sort)
        return {
          total,
          lastPage,
          result:data,
          size:query.size,
          currentPage:query.page
        }
    }

    //创建一个用户
    async greateUser(userModel:UserModel):Promise<any>{
        await this.userModel.create(userModel)
        return '创建成功'
    }

}
