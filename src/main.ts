import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { TransformInterceptor } from './interceptors/transform.interceptors';
import { Transport } from '@nestjs/microservices';
import { protobufPackage } from './database/marketing.pb';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50052',
      package: protobufPackage,
      protoPath: join('node_modules/grpc-nest-proto/proto/marketing.proto'),
    },
  });

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen();
}
bootstrap();
