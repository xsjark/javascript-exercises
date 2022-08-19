const palindromes = (string) => {
    var clean_string = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    var reverse_string = clean_string.split("").reverse().join("")
    if ( reverse_string == clean_string) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
