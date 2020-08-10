import { Request, Response} from 'express';

import db from '../database/connection';

export default class listItemController {
    
    async index(req: Request, res: Response) {
        const pratos = await db('prato')
        .join('users', 'prato.user_id', '=', 'users.id')
        .select('users.*','prato.*');

        return res.json(pratos);
    }
}