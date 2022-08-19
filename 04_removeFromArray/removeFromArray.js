const removeFromArray = (array1, ...numstofilter) => array1.filter(item => numstofilter.indexOf(item) < 0)

// Do not edit below this line
module.exports = removeFromArray;
