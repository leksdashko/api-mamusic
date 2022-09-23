import { Controller, Get } from '@nestjs/common';

@Controller('/track')
export class TrackController {
  create() {}
  delete() {}
  getOne() {}

  @Get()
  getAll() {
    return 'OKKK';
  }
}
