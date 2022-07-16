import { Model, DataTypes  } from '../deps.ts';
import Estadio from './estadio.ts';

class Equipo extends Model {
  static table = 'equipos';
  static timestamps = false;

  static fields = {
    id_equipo: { primaryKey: true, autoIncrement: true },
    nombre: DataTypes.STRING,
    lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    entrenador: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_estadio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fundacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  };

  id_equipo!: number;
  nombre!: string;
  lugar!: string;
  entrenador!: string;
  id_estadio!: number;
  fundacion!: number;
  // deno-lint-ignore no-explicit-any
  estadio!: any;

  static estadio(): Promise<Model> {
    return this.hasOne(Estadio);
  }
}

export default Equipo;