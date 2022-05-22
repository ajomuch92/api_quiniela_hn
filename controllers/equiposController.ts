import { RouterContext } from '../deps.ts';
import Equipo from '../models/equipo.ts';

export default class EquiposController {

  static async list(context: RouterContext<'/api/v1/equipos', Record<string | number, string | undefined>, Record<string, void>>): Promise<void> {
    try {
      const list: Equipo[] = await Equipo.all() as Equipo[];
      context.response.body = list;
    } catch (error) {
      context.response.status = 500;
      context.response.body = {
        error,
        msg: 'There was an error',
      };
    }
  }
  
  static async get(context: RouterContext<'/api/v1/equipos/:id', {id: string}, Record<string, void>>): Promise<void> {
    try {
      const { id } = context.params;
      const equipo = await Equipo.where('id_equipo', parseInt(id)).get();
      if (!equipo) {
        context.response.status = 404;
        context.response.body = {
          msg: 'Equipo no encontrado',
        };
      }
      context.response.body = equipo;
    } catch (error) {
      context.response.status = 500;
      context.response.body = {
        error,
        msg: 'There was an error',
      };
    }
  }
  
  static async delete(context: RouterContext<'/api/v1/equipos/:id', {id: string}, Record<string, void>>): Promise<void> {
    try {
      const { id } = context.params;
      await Equipo.where('id_equipo', parseInt(id)).delete();
      context.response.body = {
        msg: 'Delete successfully!'
      };
    } catch (error) {
      context.response.status = 500;
      context.response.body = {
        error,
        msg: 'There was an error',
      };
    }
  }
  
  static async update(context: RouterContext<'/api/v1/equipos/:id', {id: string}, Record<string, void>>): Promise<void> {
    try {
      const { id } = context.params;
      const body: Equipo = await context.request.body().value;
      const result = await Equipo.where('id_equipo', parseInt(id)).update({
        nombre: body.nombre,
        lugar: body.lugar,
        entrenador: body.entrenador,
        id_estadio: body.id_estadio,
        fundacion: body.fundacion,
      });
      context.response.body = result;
    } catch (error) {
      console.log(error);
      context.response.status = 500;
      context.response.body = {
        error,
        msg: 'There was an error',
      };
    }
  }

  static async add(context: RouterContext<'/api/v1/equipos', Record<string | number, string | undefined>, Record<string, void>>): Promise<void> {
    try {
      const body = await context.request.body().value;
      const result: Equipo = await Equipo.create({
        nombre: body.nombre,
        lugar: body.lugar,
        entrenador: body.entrenador,
        fundacion: body.fundacion,
      }) as Equipo;
      context.response.body = {...result};
    } catch (error) {
      console.log(error);
      context.response.status = 500;
      context.response.body = {
        error,
        msg: 'There was an error',
      };
    }
  }
}