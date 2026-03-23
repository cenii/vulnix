import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Registramos el cliente de RabbitMQ
    ClientsModule.register([
      {
        name: 'SCAN_SERVICE',
        transport: Transport.RMQ,
        options: {
          // IP de Tailscale del VPS Master (donde vive Rabbit)
          urls: [process.env.RABBITMQ_URL!],
          queue: 'scan_tasks',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }