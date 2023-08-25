import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as astronautaSchemas from './schemas/astronautas.schema';
import { Model } from 'mongoose';

@Injectable()
export class AstronautasService {
  constructor(
    @InjectModel(astronautaSchemas.Astronauta.name) private astronautaModel:Model<astronautaSchemas.Astronauta>
  ) {}

  async create(astronauta: any) {
    const createdAstronauta = new this.astronautaModel(astronauta);
    return createdAstronauta.save();
  }
};