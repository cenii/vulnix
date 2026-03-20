import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');
  const rmqUrl = process.env.RABBITMQ_URL;
  const rmqQueue = process.env.RABBITMQ_QUEUE;

  if (!rmqUrl || !rmqQueue) {
    logger.error('RABBITMQ_URL o RABBITMQ_QUEUE no están definidos');
    process.exit(1);
  }

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [rmqUrl],
        queue: rmqQueue,
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
  logger.log(
    `Worker de Vulnix listo para recibir órdenes en la cola: ${rmqQueue} 🚀`,
  );
}
bootstrap();
