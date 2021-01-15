
const capitalize = (text: string) => {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}


const formatToUnit = (value: number, unit: string) => {
  let diviser = 1000;
  let prefix = ' k';

  if (value > 100000) {
      diviser *= 1000;
      prefix = ' M';
  }
  let newValue : any = value / diviser;
  newValue = newValue.toFixed(2);
  newValue = String(newValue).replace('.', ',');

  return newValue + prefix + unit;
}

export default { capitalize, formatToUnit };
