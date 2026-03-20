import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TODO: Agregar TypeOrmModule para conectar con PostgreSQL
    // TypeOrmModule.forRoot({...})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
