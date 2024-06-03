import { Controller, Get, Param } from '@nestjs/common';
@Controller('demo')
export class DemoController {
  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }
}
