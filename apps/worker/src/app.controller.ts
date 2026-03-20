import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('task_created') // El nombre del evento que Hugo mandará
  handleTaskCreated(@Payload() data: any) {
    console.log('--- NUEVA TAREA RECIBIDA ---');
    console.log(`Target a escanear: ${data.target}`);
    console.log(`Tipo de escaneo: ${data.type}`);

    // Aquí es donde en el siguiente paso llamaremos a Nmap o Nikto
    this.executeScan(data.target);
  }

  private executeScan(target: string) {
    console.log(`Simulando escaneo de vulnerabilidades en ${target}...`);
    // Lógica de hacking próximamente...
  }
}
