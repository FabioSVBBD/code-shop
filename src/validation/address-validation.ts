export const isValidStreet = (street: string): boolean => {
  return /^[1-9][0-9]* [a-zA-Z]+/.test(street);
};

export const isValidPostalCode = (code: string): boolean => {
  return /^[1-9][0-9]{3}$/.test(code);
};

export const isValidPhoneNumber = (number: string): boolean => {
  return /^[0][1-9][0-9]{8}$/.test(number);
};
