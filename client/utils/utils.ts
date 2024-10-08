/**
 * Funcion para formatear numeros en base a unidades (mil, millon, etc.)
 * @param number Number
 * @param digits Numero de digitos decimales luego de la parte entera
 * @returns Numero formateado
 */
// Function to format a number in thousands (K) or millions (M) format depending on its value
export const getSuffixNumber = (number: number, digits: number = 1): string => {
  const lookup = [
    // notacion cientifica
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const lookupItem = lookup
    .slice()
    .reverse()
    .find((item) => number >= item.value);
  return lookupItem ? (number / lookupItem.value).toFixed(digits).replace(rx, '$1') + lookupItem.symbol : '0';
};
