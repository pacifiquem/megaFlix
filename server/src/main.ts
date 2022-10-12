import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParser());
  app.use(helmet());
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000, () => {
    console.log(`nest server is running at ${process.env.PORT}`);
  });
}
bootstrap();
