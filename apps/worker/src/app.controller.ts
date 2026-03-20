import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScanService } from './scan.service';

@Controller()
export class WorkerController {
  constructor(private readonly scanService: ScanService) {}

  @MessagePattern('scan_tasks')
  async handleScan(@Payload() data: { target: string; scanId: string }) {
    console.log(`[Worker] Iniciando escaneo para: ${data.target}`);

    // Ejecutamos el escaneo real
    const result = await this.scanService.executeNmap(data.target);

    // Aquí podrías enviar el resultado de vuelta a otra cola o guardarlo
    console.log(`[Worker] Escaneo ${data.scanId} finalizado.`);
    return {
      scanId: data.scanId,
      output: result,
      status: 'completed',
    };
  }
}
