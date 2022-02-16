const isRateValid = (rate) => {
  let result = true;

  if (!Number.isInteger(rate)) result = false;
  if (rate < 1 || rate > 5) result = false;

  return result;
};

module.exports = isRateValid;
