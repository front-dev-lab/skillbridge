import { capitalizeText } from './capitalizeText'

export const toCamelCase = str => {
  return str
    .split('-')
    .map((word, i) => i === 0 ? word : capitalizeText(word))
    .join('');
};
