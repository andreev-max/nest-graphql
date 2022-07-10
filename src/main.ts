import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
console.log(process.env.PORT);
async function start() {
  try {
    const PORT = process.env.PORT || 2999;
    const app = await NestFactory.create(AppModule);
    // app.enableCors();
    await app.listen(PORT);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (e) {
    console.log(e);
  }
}
start();
