import { Router } from 'express';

import indexController from '../controllers/indexController';

class IndexRoutes{ 
   
   public router: Router = Router();

   constructor(){
    this.config();

   }

   config(): void{
       this.router.get('/', indexController.index);
   }
}

const productsRoutes = new IndexRoutes();
export default productsRoutes.router;