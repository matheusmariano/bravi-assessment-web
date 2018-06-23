import apisauce from 'apisauce';
import config from '../config/';

const create = (baseURL = config.api.url) => {
  const http = apisauce.create({
    baseURL,
    timeout: 10000,
  });

  return {
    chessPreviewRequest: (pieces, cols, rows) => http.post('/v1/preview', {
      pieces,
      cols,
      rows,
    }),
  };
};

export default {
  create,
};
