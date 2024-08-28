//루트모듈과 같은 역할의 AppModule이 있다.
//AppModule에서는 우리가 하는 모든 걸 import할 것이다.
import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
