//루트모듈과 같은 역할의 AppModule이 있다.
//AppModule에서는 우리가 하는 모든 걸 import할 것이다.
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
