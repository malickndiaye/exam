import { Application } from 'express'; 
//import errors from './components/errors';
import path from 'path'; 
import etudiantRouter from './api/controllers/film';
 
 
import inscriptionRouter from './api/controllers/inscription'; 
 
 
//const url = config.url;
const url = '/api/v1'
export default function routes(app: Application): void {
 // app.use('/api/v1/inscriptions', inscriptionRouter.publicRouter);
  app.use('/api/v1/admin', inscriptionRouter.privateRouter);
  app.use('/api/v1/etudiants', etudiantRouter.publicRouter)
  // All undefined asset or api routes should return a 404
  //app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);
  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
};


 