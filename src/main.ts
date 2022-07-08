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
    body: JSONtoString(JSONResponse),
  }

  return data;

};

export const sample = main;

