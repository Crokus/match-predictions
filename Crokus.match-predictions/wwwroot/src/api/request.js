import superagent from 'superagent';

const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-type': 'application/json'
};

const API_ROOT = '';

function isValidResult (result) {
  return result && result.ok;
}

function buildRequestUrl (apiMethod) {
  if (apiMethod.indexOf('/') === 0 || apiMethod.indexOf('http') === 0) {
    return apiMethod;
  }
  return API_ROOT + apiMethod; // eslint-disable-line no-undef
}

function buildRequest (httpMethod, apiMethod, params) {
  const paramsTransport = httpMethod === 'get' ? 'query' : 'send';

  return new Promise((resolve, reject) => {
    superagent[httpMethod](buildRequestUrl(apiMethod))
      .set(REQUEST_HEADERS)[paramsTransport](params)
      .on('error', error => reject(error))
      .end((err, result) => {
        if (err || !isValidResult(result)) {
          reject(err);
        } else {
          resolve(result.body, result);
        }
      });
  });
}

export function get (apiMethod, queryParams) {
  return buildRequest('get', apiMethod, queryParams);
}

export function post (apiMethod, queryParams) {
  return buildRequest('post', apiMethod, queryParams);
}
