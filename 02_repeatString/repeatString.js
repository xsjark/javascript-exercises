const repeatString = (string, repeat) => {
  if (repeat > 0) return string.repeat(repeat);
  if (repeat < 0) return "ERROR";
  else return "";
};
// Do not edit below this line
module.exports = repeatString;
