import { Controller, Post, Body } from '@nestjs/common';
import { AstronautasService } from './astronautas.service';

@Controller('astronautas')
export class AstronautasController {
  constructor(private astronautasService: AstronautasService) {}
  @Post()
  async create(@Body() createAstronauta: any) {
    return this.astronautasService.create(createAstronauta);
  }
}
