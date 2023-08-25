import { Schema , Prop, SchemaFactory } from "@nestjs/mongoose"

export enum AstronautaTipo{
  Comandante = 'Comandante',
  Tripulante = 'Tripulante'
}

@Schema()
export class Astronauta{
  @Prop({ required: true })
  Nombre: string;
  @Prop({ required: true })
  Mision: string;
  @Prop({ default: AstronautaTipo.Tripulante})
  tipo: AstronautaTipo;
};

export const AstronautaSchema = SchemaFactory.createForClass(Astronauta);