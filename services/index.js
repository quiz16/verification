import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  const err = new Error(response.statusText);
  err.response = response;
  throw err;
};

const parseJSON = (response) => response.json();

const fetchWrapper = (url, options) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  options.headers = headers;

  if (typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body);
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
};

export default fetchWrapper;
