import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

@Module({
  imports:[TypegooseModule.forRoot('mongodb://localhost:27017/Online_DataBase',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
  })],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
