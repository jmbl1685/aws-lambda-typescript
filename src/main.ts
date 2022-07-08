import {
  DEFAULT_RESPONSE,
  JSONtoString
} from './helpers/utils';

import {
  IHttpResponse
} from './interfaces';

export const main = async (event: any) => {

  const JSONResponse = DEFAULT_RESPONSE(event);

  const data: IHttpResponse = {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSONtoString(JSONResponse),
  }

  return data;

};

export const sample = main;

