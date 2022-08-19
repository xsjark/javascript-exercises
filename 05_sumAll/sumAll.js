const sumAll = (start, stop) => {
    if (start >= 0 && stop >= 0 && typeof start === 'number' && typeof stop === 'number') {
        var array = Array.from({ length: (Math.abs((stop - start) / 1) + 1 )}, (_, i) => start < stop ? (start + (i * 1)) : start - (i * 1));
        var array_sum = array.reduce((a, b) => a + b, 0);
        return array_sum
    } else {
        return "ERROR"
    }
    
}
// Do not edit below this line
module.exports = sumAll;
