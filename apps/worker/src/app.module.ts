import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WorkerController } from './app.controller';
import { ScanService } from './scan.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TODO: Agregar TypeOrmModule para conectar con PostgreSQL
    // TypeOrmModule.forRoot({...})
  ],
  controllers: [WorkerController],
  providers: [ScanService],
})
export class AppModule {}
