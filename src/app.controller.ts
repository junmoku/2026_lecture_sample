import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('server-info')
  getServerInfo() {
    return this.appService.getServerInfo();
  }

  @Get('db-check')
  getDbCheck() {
    return this.appService.getDbCheck();
  }
}
