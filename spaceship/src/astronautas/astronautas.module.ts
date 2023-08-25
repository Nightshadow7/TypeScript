import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as astronautaSchemas from './schemas/astronautas.schema';
import { AstronautasService } from './astronautas.service';
import { AstronautasController } from './astronautas.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: astronautaSchemas.Astronauta.name,
      schema: astronautaSchemas.AstronautaSchema
    }])
  ],
  providers: [AstronautasService],
  controllers: [AstronautasController],
})
export class AstronautasModule {}
