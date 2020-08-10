import { Request, Response } from 'express';

import db from '../database/connection';

export default class ClassesController {

  async index(req: Request, res: Response) {
    const filters = req.query;

    const category = filters.category as string;
    const cost = filters.cost as string;

    if (!filters.category || !filters.cost){
      return res.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const pratos = await db('prato')
      .where('prato.category', '=', category)
      .where('prato.cost', '=', cost)
      .join('users', 'prato.user_id', '=', 'users.id')
      .select(['users.*','prato.*',])

    
    return res.json(pratos);
  }

  async create(req: Request, res: Response) {
    const { 
      nameRest,
      whatsapp,
      name,
      avatar,
      bio,
      category,
      cost
     } = req.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        nameRest,
        whatsapp
      });
    
      const user_id = insertedUsersIds[0];
    
      await trx('prato').insert({
        name,
        avatar,
        bio,
        category,
        cost,
        user_id,
      });

      await trx.commit();
    
      return res.status(201).send();
    } catch (err) {
      await trx.rollback();
  
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}