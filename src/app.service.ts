//function을 배치하는 곳 : service
//비지니스 로직을 실행하는 역할
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'Hi!!';
  }
}
