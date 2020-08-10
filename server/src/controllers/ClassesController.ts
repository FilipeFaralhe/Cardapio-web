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
      .select(['prato.*'])

    
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
    
    
      await trx('prato').insert({
        nameRest,
        whatsapp,
        name,
        avatar,
        bio,
        category,
        cost,
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