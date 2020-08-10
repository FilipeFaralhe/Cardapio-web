import { Request, Response} from 'express';

import db from '../database/connection';

export default class listItemController {
    
    async index(req: Request, res: Response) {
        const pratos = await db('prato')
        .select('prato.*');

        return res.json(pratos);
    }
}