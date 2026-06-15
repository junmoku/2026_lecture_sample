import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as os from 'os';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

  getHello(): string {
    return 'DevOps Sample API';
  }

  getHealth() {
    return {
      status: 'ok',
      message: 'server is running',
      timestamp: new Date().toISOString(),
    };
  }

  getServerInfo() {
    return {
      hostname: os.hostname(),
      platform: os.platform(),
      uptime: os.uptime(),
      nodeVersion: process.version,
      port: process.env.PORT || 3000,
      timestamp: new Date().toISOString(),
    };
  }

  async getDbCheck() {
    const result = await this.dataSource.query('SELECT 1 AS result');

    return {
      status: 'ok',
      message: 'database connection success',
      result,
      timestamp: new Date().toISOString(),
    };
  }
}
