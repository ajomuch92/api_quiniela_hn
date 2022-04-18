import { Model, DataTypes } from '../deps.ts';
import Estadio from "./estadio.ts";

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
      relationship: {
        kind: 'multiple' as const,
        model: Estadio,
      }
    },
  };
}

export default Equipo;