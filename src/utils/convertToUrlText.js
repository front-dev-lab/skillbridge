export const convertToUrlText = str => {
  const preparedStr = str.replaceAll('/', ' ');

  let result = '';

  for (let i = 0; i < preparedStr.length; i++) {
    const char = preparedStr[i];
    
    if (!(/^[\p{L}\s]$/u.test(char))) {
      continue;
    }

    result = result + char.toLowerCase();
  }

  return result.replaceAll(' ', '-');
};
