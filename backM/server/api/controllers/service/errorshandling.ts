import logger from '../../../components/logger';

class ErrorsHandlingService {
 //todo reviews call of this with right params
  handleError (res, statusCode, loggerMessage, clientMessage){
    logger.error(loggerMessage);
    res.status(statusCode).json({
      message: clientMessage
    });
  };
  
  verifyModel  (res, model) {
    let errors = model.validateSync();
    if(errors) {
      return this.handleError(res, 400, errors, 'Bad or missing parameters');
    }
  };

  throwError (serverError, clientMessage, messageCode) {
    logger.error(serverError);
    let err:any = new Error(clientMessage);
    err.code = messageCode;
    logger.error(err);
    throw err;
  };
};
export default  new ErrorsHandlingService();
