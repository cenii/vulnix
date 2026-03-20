import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

@Injectable()
export class ScanService {
  async executeNmap(target: string): Promise<string> {
    try {
      // -F es un escaneo rápido de los 100 puertos más comunes
      const { stdout } = await execPromise(`nmap -F ${target}`);
      return stdout;
    } catch (error) {
      return `Error en el escaneo: ${error.message}`;
    }
  }
}
