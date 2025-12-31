export const capitalize = (str: string, onlyFirst = false): string => {
  if (typeof str !== 'string') {
    return '';
  }
  if (onlyFirst) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
