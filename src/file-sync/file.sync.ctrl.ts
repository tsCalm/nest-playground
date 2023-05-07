import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';

@Controller()
export class FileSyncController {
  constructor() {}

  @Get('sync')
  syncTest() {
    const data = fs.readFileSync('src/file-sync/dummy.txt', 'utf8');

    return data;
  }

  @Get('async')
  asyncTest() {
    const data = fs.readFile('src/file-sync/dummy.txt', 'utf8', (err, data) => {
      return data;
    });
    return data;
  }
}
