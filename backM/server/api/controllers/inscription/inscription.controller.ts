import FilmService from '../film/film.service';
import InscriptionService from './inscription.service';
import Errorshandling from '../service/errorshandling';
import logger from '../../../components/logger';
//import fs from 'fs'
import config from '../../../config/environment';
class InscriptionController{

  /**
   * subscribe 
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */

  async  subscribe(req, res) {
    let inscription = { 
      film: req.body.film
      
    };

    inscription.film= await FilmService.getOneFilm(inscription.film);

    if(inscription.film ==null){
      return Errorshandling.handleError(res, 404, 404, "film not found");
    }

    try {
      let _partner = await InscriptionService.createInscription(inscription);
      if(!_partner) {
        return Errorshandling.throwError('Error occurred when trying to subscribe as a inscription', 'Error occurred when trying to subscribe as a inscription', 500);
      } 
      res.json(_partner);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

  

  /**
   * Get one inscription
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */
  async  getOneInscription(req, res) {
    if(!req.params.id) {
      return Errorshandling.handleError(res, 422, 'Trying to get one inscription without id', 'idPartner is required');
    }
    try {
      let inscription = await InscriptionService.getOneInscription(req.params.id);
      if(!inscription) {
        return Errorshandling.throwError('Error occurred when trying to get this inscription', 'Error occurred when trying to get this inscription', 500);
      }
      res.json(inscription);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

  /**
   * get all partners
   * @param req
   * @param res
   * @returns {Promise.<void>}
   */
  async  getAllInscription(req, res) {
    try {
      let partners = await InscriptionService.getAllInscription();
      res.json(partners);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

 
    
}
export default new InscriptionController();