import Film from './film.model';
import GenericRepository from '../service/generic.repository';
import ErrorHandling from '../service/errorshandling';
const FilmRepository = new GenericRepository(Film);
export class FilmService  {
  /**
   * save a new instance of partner
   * @param etd
   * @returns {Promise.<*>}
   */
  async CreateFilm  (etd) {
    let _film = null;
    
      _film=new Film(etd);
      const err=_film.validateSync();
      if(err){
        return  ErrorHandling.throwError(err, 'An Error occurred when saving this partner', 500);
     
      }
      _film = await FilmRepository.save(_film);
    return _film;
  };



  /**
   * Get all Ecolinscriptionse
   * @returns {Promise.<*>}
   */

  async getAllFilm ()   {
    let film = [];
    try {
      film = await FilmRepository.getAll();
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting all inscriptions', 500);
    }
    return film;
  };
  

  /**
   * Get one partner
   * @param idPartner
   * @returns {Promise.<*>}
   */
  async getOneFilm  (idFilm)  {
    let film = null;
    try {
      film = await FilmRepository.getOne(idFilm);
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting this partner', 500);
    }
    return film;
  };

};
export default new FilmService();
