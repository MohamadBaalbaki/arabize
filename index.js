import axios from 'axios';
import * as constants from './constants.js';
import * as utils from './utils.js';

const arabize = async text => {
  if (utils.isNotValidText(text)) throw new Error(constants.ERROR_MESSAGES.invalidText);

  let results = [];

  try {
    results = await Promise.all(
      utils.splitTokens(text).map(token => axios.get(utils.constructFullYamliEndpoint(token)))
    );
  } catch (err) {
    throw new Error(constants.ERROR_MESSAGES.transliterationApiError);
  }

  return results.map(result => {
    const data = result.data;
    const transliteratedToken = data.r?.split('|')?.[0]?.split('/')?.[0];
    return transliteratedToken !== '' ? transliteratedToken : (constants.DEFAULT_CHARS[data.w] || data.w);
  }).join(' ');
}

export {
  arabize
}