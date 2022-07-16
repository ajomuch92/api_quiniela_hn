import { config, Database, MySQLConnector } from '../deps.ts';
import Equipo from '../models/equipo.ts';
import Estadio from '../models/estadio.ts';

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME, DATABASE_PORT } = await config();


const connection = new MySQLConnector({
  host: DATABASE_HOST,
  username: DATABASE_USER,
  password: DATABASE_PASS,
  database: DATABASE_NAME,
  port: parseInt(DATABASE_PORT),
});

const db = new Database(connection);

db.link([Estadio, Equipo]);

// await db.sync();

export default db;