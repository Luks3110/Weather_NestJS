import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Get the express server going and listen on port 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
