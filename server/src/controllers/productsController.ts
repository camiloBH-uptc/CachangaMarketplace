import {Request, Response } from 'express';



import pool from '../database'; 

class ProductsController {

   public async list (req: Request, res: Response){
        const products = await pool.query('SELECT * FROM PRODUCTS', function (err, rows) {res.send (rows);});
        res.json(products);
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
        const product = await pool.query('SELECT * FROM PRODUCTS WHERE ID = ?', [id], function (err, rows) {res.send (rows);});
        res.json(product);
    }

    public async create(req: Request, res: Response){
        await pool.query('INSERT INTO PRODUCTS SET ?', [req.body]);
        res.json({text: 'Se creo un producto'});
    }

    public async delete(req: Request, res: Response){
        res.json({text: 'borrando un producto ' + req.params.id});
        await pool.query('DELETE FROM PRODUCTS WHERE ID = ?', [req.params.id]);
    }

    public async update(req: Request, res: Response){
        const {id} = req.params;
        await pool.query('UPDATE PRODUCTS SET ? WHERE ID = ?', [req.body, id]);
        res.json({text: 'Actualizando el producto ' + req.params.id});
    }



    

}

const productsController = new ProductsController();

export default productsController;