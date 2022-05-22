import { Model, DataTypes } from '../deps.ts';

class Estadio extends Model {
  static table = 'equipos';
  static timestamps = false;

  static fields = {
    id_estadio: { primaryKey: true, autoIncrement: true },
    nombre: DataTypes.STRING,
    lugar: DataTypes.STRING,
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  id_estadio!: number;
  nombre!: string;
  lugar!: string;
  capacidad!: number;
}

export default Estadio;