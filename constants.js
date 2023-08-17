const DEFAULT_CHARS = {
  '%': '٪',
  '?': '؟',
  ',': '،',
  ';': '؛'
};

const ERROR_MESSAGES = {
  invalidText: 'Can only arabize non-nullish strings',
  transliterationApiError: 'Could not transliterate tokens, error occurred while calling the Yamli API'
};

export {
  DEFAULT_CHARS,
  ERROR_MESSAGES
}