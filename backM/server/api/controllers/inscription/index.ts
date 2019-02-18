import express from 'express';
import controller  from './inscription.controller'; 
let publicRouter = express.Router() 
   .get('/', controller.getAllInscription)
   .get('/:id', controller.getOneInscription)  
   .post('/', controller.subscribe);

let privateRouter = express.Router()

let value={publicRouter:publicRouter,privateRouter:privateRouter}
export default value;
