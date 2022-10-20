import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import * as mongoSanitize from 'express-mongo-sanitize';
import { Logger } from 'nestjs-pino';

async function megaflixServerServicesProvider() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'localhost:3000' },
    bufferLogs: true,
  });
  app.use(cookieParser());
  app.use(helmet());
  app.useLogger(app.get(Logger));
  app.use(mongoSanitize());
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000, () => {
    console.log(`nest server is running at ${process.env.PORT}`);
  });
}
megaflixServerServicesProvider();
