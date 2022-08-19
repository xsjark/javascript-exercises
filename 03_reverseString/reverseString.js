const reverseString = function(string) {
    var array = string.split('');
    var reverse_array = array.reverse();
    var result = reverse_array.join('')
    return result 
};

// Do not edit below this line
module.exports = reverseString;
