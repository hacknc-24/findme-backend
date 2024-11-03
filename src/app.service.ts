import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getData(): { id: number; name: string; description: string } {
    return { id: 1, name: 'Placeholder Name', description: 'Placeholder Description' };
  }
}