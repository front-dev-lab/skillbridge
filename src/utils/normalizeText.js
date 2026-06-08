import { capitalizeText } from './capitalizeText';

export const normalizeText = str => str.split('-').map(word => capitalizeText(word)).join(' ');
