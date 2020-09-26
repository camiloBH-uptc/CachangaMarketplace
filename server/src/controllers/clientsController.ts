import {Request, Response } from 'express';

import pool from '../database'; 

class ClientsController {

   public async list (req : Request, res : Response){
        const users = await pool.query('SELECT * FROM USERS', function (err, rows) {res.send (rows);});
        res.json(users);
    }

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO USERS SET ?', [req.body]);
        res.json({text: 'SE REGISTRO UN CLIENTE'});
    }

    public async delete(req: Request, res: Response){
        res.json({text: 'borrando un Cliente '  + req.params.id});
        await pool.query('DELETE FROM USERS WHERE ID = ?', [req.params.id]);
    }

    public async update(req: Request, res: Response){

        const {id} = req.params;
        await pool.query('UPDATE USERS SET ? WHERE ID = ?', [req.body, id]);
        res.json({text: 'Actualizando un Cliente ' + req.params.id});
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const user = await pool.query('SELECT * FROM USERS WHERE ID = ?', [id], function (err, rows) {res.send (rows);});
        res.json(user);
    }

}

const clientsController = new ClientsController();
export default clientsController;