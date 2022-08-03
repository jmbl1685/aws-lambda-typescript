import {
  DEFAULT_RESPONSE,
  JSONtoString
} from './helpers/utils';

import {
  IHttpResponse
} from './interfaces';

export const httpSample = async (event: any) => {

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

export const cronSample = (event: any) => {
  // your code here...
  const CRON_TEST_VALUE = process.env.CRON_TEST_VALUE;
  console.log('CRON_TEST_VALUE', CRON_TEST_VALUE);
  return 'success';
}
