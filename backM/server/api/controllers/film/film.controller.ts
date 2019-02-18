import FilmService from './Film.service';
import Errorshandling from '../service/errorshandling';
import logger from '../../../components/logger'; 
//import fs from 'fs';
import config from '../../../config/environment';
class FilmController{

  /**
   * subscribe 
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */

  async  subscribe(req, res) {
    let film = {
      nom: req.body.nom,
      synopsis: req.body.synopsis,
      annee: req.body.annee,
      image: req.body.image, 
      type:req.body.type,
    };
    try {
      let _film = await FilmService.CreateFilm(film);
      if(!_film) {
        return Errorshandling.throwError('Error occurred when trying to subscribe as a film', 'Error occurred when trying to subscribe as a film', 500);
      } 
      res.json(_film);
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
  async  getAllEtudiant(req, res) {
    try {
      let films = await FilmService.getAllFilm();
      res.json(films);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

  /**
   * Get one film
   * @param req
   * @param res
   * @returns {Promise<Spy>}
   */
  async  getOneFilm(req, res) {
    if(!req.params.id) {
      return Errorshandling.handleError(res, 422, 'Trying to get one film without id', 'idPartner is required');
    }
    try {
      let film = await FilmService.getOneFilm(req.params.id);
      if(!film) {
        return Errorshandling.throwError('Error occurred when trying to get this film', 'Error occurred when trying to get this film', 500);
      }
      res.json(film);
    } catch(err) {
      return Errorshandling.handleError(res, err.code, err, err.message);
    }
  }

 
    
}
export default new FilmController();