import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('SCAN_SERVICE') private readonly client: ClientProxy,
  ) { }

  @Get('test-scan')
  async test() {
    const payload = { target: '1.1.1.1', user: 'Hugo-Cenii' };

    // Forzamos a que NestJS intente conectar antes de seguir
    try {
      await this.client.connect(); // <--- Añade esto
      this.client.emit('new_scan', payload);
      return { status: 'Conectado y enviado' };
    } catch (error) {
      return { status: 'Error de conexión', error: error.message };
    }
  }
}
