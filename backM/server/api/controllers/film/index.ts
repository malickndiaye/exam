import express from 'express';
import controller  from './film.controller'; 
let publicRouter = express.Router() 
   .get('/:id', controller.getOneFilm)  
   .post('/', controller.subscribe);

let privateRouter = express.Router()

let value={publicRouter:publicRouter,privateRouter:privateRouter}
export default value;
