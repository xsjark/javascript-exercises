const ftoc = (temperature) => Math.round((temperature -32) * (5/9) * 10) / 10;
// (32°F − 32) × 5/9

const ctof = (temperature) => Math.round(((temperature * (9/5)) + 32) * 10) / 10;
  // (0°C × 9/5) + 32 

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
