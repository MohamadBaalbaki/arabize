import config from './config.js';

const constructFullYamliEndpoint = word => {
  return `${config.baseUrl}?word=${word}&tool=${config.tool}&account_id=${config.account_id}&prot=${config.prot}&hostname=${config.hostname}&path=${config.path}&build=${config.build}`;
}

const isNotValidText = text => {
  return typeof text !== 'string';
}

const splitTokens = text => {
  return text.split(/(\W+)/).reduce((acc, token) => {
    const trimmedToken = token.trim();
    if (trimmedToken !== '') acc.push(trimmedToken);
    return acc;
  }, []);
}

export {
  constructFullYamliEndpoint,
  isNotValidText,
  splitTokens
}