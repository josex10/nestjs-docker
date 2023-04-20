import { Controller, Get } from '@nestjs/common';
import { AppService, Movie } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  */

  @Get()
  getMovies(): Movie[]{
    return this.appService.getMovies();
  }
}
