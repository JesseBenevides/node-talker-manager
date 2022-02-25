const isDateValid = (date) => {
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return dateRegex.test(date);
};

module.exports = isDateValid;
