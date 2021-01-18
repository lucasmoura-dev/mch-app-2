
const capitalize = (text: string) => {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}


const formatToUnit = (value: number, unit: string, hidePrefix = false, splitResult = false) => {
  let diviser = 1000;
  let prefix = ' k';

  if (value > 100000) {
      diviser *= 1000;
      prefix = ' m';
  }
  let newValue : any = value / diviser;
  newValue = newValue.toFixed(2);
  newValue = String(newValue).replace('.', ',');

  prefix = (hidePrefix) ? '' : prefix;

  if (splitResult) {
    return { value: newValue, unit: prefix + unit };
  }

  return newValue + prefix + unit;
}

const formatToReal = (value: number) => {
  let money = String(value);
  money = money.replace('.', ',');

  return money;
}

export default { capitalize, formatToUnit, formatToReal };
