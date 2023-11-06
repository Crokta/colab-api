import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(
    graphqlUploadExpress({
      maxFileSize: 10000000,
      maxFiles: 1,
    }),
  );
  await app.listen(3000);
}
bootstrap();
