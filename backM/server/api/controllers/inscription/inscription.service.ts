import Inscription from './inscription.model';
import GenericRepository from '../service/generic.repository';
import ErrorHandling from '../service/errorshandling';
const InscriptionRepository = new GenericRepository(Inscription);
export class InscriptionService  {
  /**
   * save a new instance of inscription
   * @param inscription
   * @returns {Promise.<*>}
   */
  async createInscription (inscription) {
    let _inscription = null;
    try {
      _inscription = await InscriptionRepository.save(inscription);
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when saving this inscription', 500);
    }
    return _inscription;
  };


  
  async getAllInscription ()   {
    let inscriptions = [];
    try {
      inscriptions = await InscriptionRepository.getAll();
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting all inscriptions', 500);
    }
    return inscriptions;
  };

   
  /**
   * Get one inscription
   * @param idPartner
   * @returns {Promise.<*>}
   */
  async getOneInscription  (idPartner)  {
    let inscription = null;
    try {
      inscription = await InscriptionRepository.getOne(idPartner);
    } catch(err) {
      return ErrorHandling.throwError(err, 'An Error occurred when getting this inscription', 500);
    }
    return inscription;
  };

};
export default new InscriptionService();
