import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
//import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'nest-session',
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
    }),
  );
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:4200',
    ],
  });
  await app.listen(8000);
}

bootstrap();
