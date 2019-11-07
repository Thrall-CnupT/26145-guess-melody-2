import discharge from './discharge';

export function pluralize(num, one, two, five) {
  let number = num;

  if (number === `` || number === null) {
    return ``;
  }

  number = Number(number);

  if (Number.isNaN(number)) {
    return ``;
  }

  number %= 100;

  if (number >= 5 && number <= 20) {
    return five;
  }

  number %= 10;

  if (number === 1) {
    return one;
  }

  if (number >= 2 && number <= 4) {
    return two;
  }

  return five;
}

export function pluralizeTemplate(num, one, two, five, template = `%d %s`) {
  const label = pluralize(num, one, two, five);

  return label
    ? template.replace(`%d`, discharge(num)).replace(`%s`, label)
    : ``;
}
