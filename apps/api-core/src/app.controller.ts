import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('SCAN_SERVICE') private readonly client: ClientProxy,
  ) { }

  @Get('test-scan')
  async sendTest() {
    const payload = { target: '1.1.1.1', priority: 'high' };

    // Esto envía el mensaje a la cola 'scan_tasks'
    this.client.emit('new_scan', payload);

    return { message: 'Mensaje enviado a la cola. ¡Álvaro debería verlo!' };
  }
}
