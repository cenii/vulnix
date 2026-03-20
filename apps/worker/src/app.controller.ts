import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScanService } from './scan.service';

@Controller()
export class WorkerController {
  constructor(private readonly scanService: ScanService) {}

  @MessagePattern('scan_tasks')
  async handleScan(@Payload() data: { target: string; scanId: string }) {
    console.log(`Iniciando escaneo para: ${data.target}`);

    const result = await this.scanService.executeNmap(data.target);

    console.log(`Escaneo ${data.scanId} finalizado.`);
    return {
      scanId: data.scanId,
      target: data.target,
      result: result,
      timestamp: new Date().toISOString(),
    };
  }
}
