import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFIlter } from './common/filter/HttpExceptionFIlter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //使用全局请求异常过滤器
  app.useGlobalFilters(new HttpExceptionFIlter())
  const options = new DocumentBuilder()
  .setTitle('OnLine')
  .setDescription('在线课堂API')
  .setVersion('1.0')
  .addTag('OnLineClass')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-Online', app, document);
  await app.listen(3000);
  console.log("http://localhost:3000")
  console.log("http://localhost:3000/api-Online")
}
bootstrap();
